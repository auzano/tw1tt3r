// ── APP ──

const PAGE_SIZE  = 8;

let activeTab   = "all";
let activeNav   = "home";
let sortedList  = [];
let loadedCount = 0;

// ── STORAGE ──
function getLoved() {
  try { return new Set(JSON.parse(localStorage.getItem("loved") || "[]")); }
  catch { return new Set(); }
}
function saveLoved(set) {
  localStorage.setItem("loved", JSON.stringify([...set]));
}
function isLoved(id) { return getLoved().has(String(id)); }
function toggleLove(id) {
  const loved = getLoved();
  loved.has(String(id)) ? loved.delete(String(id)) : loved.add(String(id));
  saveLoved(loved);
}

// ── SHUFFLE ──
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sortPosts(list) {
  const loved  = getLoved();
  const unread = list.filter(p => !loved.has(String(p.id)));
  const read   = list.filter(p =>  loved.has(String(p.id)));
  return [...shuffle(unread), ...shuffle(read)];
}

// ── PROGRESS BAR ──
function updateProgress() {
  const loved      = getLoved();
  const total      = posts.length;
  const lovedCount = [...loved].filter(id => posts.find(p => String(p.id) === id)).length;
  const pct        = total === 0 ? 0 : Math.round((lovedCount / total) * 100);
  document.getElementById("progress-fill").style.width  = pct + "%";
  document.getElementById("progress-label").textContent = `${lovedCount}/${total} read`;
}

// ── RENDER HELPERS ──
function renderHashtags(text) {
  return text.replace(/#(\w+)/g, '<span class="hashtag">#$1</span>');
}

function tweetTextHTML(text) {
  return `<div class="tweet-text">${renderHashtags(text)}</div>`;
}

function tweetImageHTML(post) {
  if (!post.image) return "";
  return `
    <div class="tweet-img-wrap">
      <img class="tweet-img" src="${post.image}" alt="" loading="lazy"
        onerror="this.closest('.tweet-img-wrap').style.display='none'" />
    </div>
  `;
}

function tweetHTML(post) {
  const loved = isLoved(post.id);
  return `
    <article class="tweet" data-id="${post.id}" role="link" tabindex="0">
      <div class="tweet-avi" style="background:${post.account.bg};">${post.account.emoji}</div>
      <div class="tweet-body">
        <div class="tweet-header">
          <span class="tweet-name">${post.account.name}</span>
          <span class="tweet-handle">${post.account.handle}</span>
          <span class="tweet-dot">·</span>
          <span class="tweet-time">${post.time}</span>
        </div>
        ${tweetTextHTML(post.text)}
        ${tweetImageHTML(post)}
        <div class="tweet-actions">
          <div class="action comment" data-stop>
            <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          </div>
          <div class="action repost" data-stop>
            <svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>
          </div>
          <div class="action like ${loved ? "liked" : ""}" data-stop data-id="${post.id}">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </div>
        </div>
      </div>
    </article>
  `;
}

// ── BIND EVENTS ──
function bindTweets(els) {
  els.forEach(el => {
    // Navigate to thread (but not on action buttons or show-more)
    el.addEventListener("click", e => {
      if (e.target.closest("[data-stop]") || e.target.closest(".show-more")) return;
      window.location.href = `thread.html?id=${el.dataset.id}`;
    });
    el.addEventListener("keydown", e => {
      if (e.key === "Enter") window.location.href = `thread.html?id=${el.dataset.id}`;
    });

    // Like button
    const likeBtn = el.querySelector(".action.like");
    if (likeBtn) {
      likeBtn.addEventListener("click", () => {
        toggleLove(likeBtn.dataset.id);
        likeBtn.classList.toggle("liked");
        updateProgress();
        const article = likeBtn.closest(".tweet");
        article.style.transition = "opacity 0.25s";
        article.style.opacity    = "0";
        setTimeout(() => renderFeed(), 280);
      });
    }
  });
}

// ── LAZY LOAD ──
let observer = null;

function observerDisconnect() {
  if (observer) { observer.disconnect(); observer = null; }
  document.getElementById("sentinel")?.remove();
}

function setupObserver() {
  observerDisconnect();
  const sentinel = document.createElement("div");
  sentinel.id = "sentinel";
  sentinel.style.height = "1px";
  document.getElementById("feed").after(sentinel);
  observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) loadMore();
  }, { rootMargin: "200px" });
  observer.observe(sentinel);
}

function loadMore() {
  const feed  = document.getElementById("feed");
  const batch = sortedList.slice(loadedCount, loadedCount + PAGE_SIZE);
  if (!batch.length) { observerDisconnect(); return; }
  const frag = document.createDocumentFragment();
  batch.forEach(post => {
    const div = document.createElement("div");
    div.innerHTML = tweetHTML(post);
    frag.appendChild(div.firstElementChild);
  });
  feed.appendChild(frag);
  const allTweets = [...feed.querySelectorAll(".tweet")];
  bindTweets(allTweets.slice(loadedCount));
  loadedCount += batch.length;
  if (loadedCount >= sortedList.length) observerDisconnect();
}

// ── RENDER FEED ──
function renderFeed() {
  const feed  = document.getElementById("feed");
  const empty = document.getElementById("empty");
  observerDisconnect();

  const list = activeNav === "loved"
    ? posts.filter(p => isLoved(p.id))
    : (activeTab === "all" ? posts : posts.filter(p => p.category === activeTab));

  sortedList  = activeNav === "loved" ? shuffle(list) : sortPosts(list);
  loadedCount = 0;
  feed.innerHTML = "";

  if (!sortedList.length) {
    empty.textContent   = activeNav === "loved" ? "No loved posts yet." : "No posts in this category.";
    empty.style.display = "block";
    updateProgress();
    return;
  }

  empty.style.display = "none";
  loadMore();
  setupObserver();
  updateProgress();
}

// ── TABS ──
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    activeTab = tab.dataset.tab;
    renderFeed();
  });
});

// ── BOTTOM NAV ──
document.getElementById("nav-home").addEventListener("click", () => {
  if (activeNav === "loved") {
    // Switch back to feed
    activeNav = "home";
    document.getElementById("nav-home").classList.add("active");
    document.getElementById("nav-loved").classList.remove("active", "nav-loved-active");
    renderFeed();
  } else {
    // Already on feed — scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
document.getElementById("nav-loved").addEventListener("click", () => {
  activeNav = "loved";
  document.getElementById("nav-loved").classList.add("active", "nav-loved-active");
  document.getElementById("nav-home").classList.remove("active");
  renderFeed();
});

// ── READ TAB FROM URL ──
const urlTab = new URLSearchParams(window.location.search).get("tab");
if (urlTab) {
  activeTab = urlTab;
  document.querySelectorAll(".tab").forEach(t => {
    t.classList.toggle("active", t.dataset.tab === urlTab);
  });
}

// ── STREAK — track daily open ──
(function trackDailyOpen() {
  const today = new Date().toISOString().slice(0, 10);
  try {
    const data      = JSON.parse(localStorage.getItem("streak") || "{}");
    if (data.lastDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    const newCount  = data.lastDate === yesterday ? (data.count || 0) + 1 : 1;
    localStorage.setItem("streak", JSON.stringify({ count: newCount, lastDate: today }));
  } catch {}
})();

// ── BFCACHE FIX — re-render when returning via back button (Safari) ──
// Safari restores pages from cache without re-running JS.
// pageshow fires even on cached restore; persisted=true means it came from bfcache.
window.addEventListener("pageshow", e => {
  if (e.persisted) renderFeed();
});

// ── NEW POSTS TOAST ──
// Shows a "New posts" pill after a few minutes of idle — tapping shuffles and scrolls to top
(function setupToast() {
  const DELAY_MS = 3 * 60 * 1000; // show after 3 minutes
  let toastTimer = null;
  let toast = null;

  function createToast() {
    if (toast) return;
    toast = document.createElement("div");
    toast.id = "new-toast";
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59l-.047-.02z"/>
      </svg>
      New posts
    `;
    document.body.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => toast.classList.add("toast-visible"));

    toast.addEventListener("click", () => {
      dismissToast();
      window.scrollTo({ top: 0, behavior: "smooth" });
      renderFeed();
    });
  }

  function dismissToast() {
    if (!toast) return;
    toast.classList.remove("toast-visible");
    setTimeout(() => {
      toast?.remove();
      toast = null;
    }, 300);
  }

  function scheduleToast() {
    clearTimeout(toastTimer);
    toastTimer = setTimeout(createToast, DELAY_MS);
  }

  // Reset timer on user interaction
  ["scroll", "touchstart", "click"].forEach(evt => {
    document.addEventListener(evt, () => {
      dismissToast();
      scheduleToast();
    }, { passive: true });
  });

  scheduleToast();
})();

renderFeed();

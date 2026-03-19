// ── APP ──

let activeTab = "all";
let activeNav = "home"; // "home" | "loved"

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
  if (loved.has(String(id))) loved.delete(String(id));
  else loved.add(String(id));
  saveLoved(loved);
}

// ── SHUFFLE (Fisher-Yates) ──
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── SORT: unread (shuffled) dulu, loved di bawah ──
function sortPosts(list) {
  const loved = getLoved();
  const unread = list.filter(p => !loved.has(String(p.id)));
  const read   = list.filter(p =>  loved.has(String(p.id)));
  return [...shuffle(unread), ...shuffle(read)];
}

// ── PROGRESS BAR ──
function updateProgress() {
  const loved     = getLoved();
  const total     = posts.length;
  const lovedCount = [...loved].filter(id => posts.find(p => String(p.id) === id)).length;
  const pct       = total === 0 ? 0 : Math.round((lovedCount / total) * 100);

  document.getElementById("progress-fill").style.width  = pct + "%";
  document.getElementById("progress-label").textContent = `${lovedCount}/${total} dibaca`;
}

// ── RENDER ──
function renderHashtags(text) {
  return text.replace(/#(\w+)/g, '<span class="hashtag">#$1</span>');
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
        <div class="tweet-text">${renderHashtags(post.text)}</div>
        <div class="tweet-actions">
          <div class="action comment" title="Balas" data-stop>
            <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          </div>
          <div class="action repost" title="Repost" data-stop>
            <svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>
          </div>
          <div class="action like ${loved ? "liked" : ""}" title="Suka" data-stop data-id="${post.id}">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderFeed() {
  const feed  = document.getElementById("feed");
  const empty = document.getElementById("empty");

  let list = activeNav === "loved"
    ? posts.filter(p => isLoved(p.id))
    : (activeTab === "all" ? posts : posts.filter(p => p.category === activeTab));

  // loved tab: urutkan by loved (semua sudah loved, shuffle aja)
  const sorted = activeNav === "loved" ? shuffle(list) : sortPosts(list);

  if (sorted.length === 0) {
    feed.innerHTML = "";
    empty.textContent = activeNav === "loved"
      ? "Belum ada post yang kamu love."
      : "Belum ada konten di kategori ini.";
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";
  feed.innerHTML = sorted.map(tweetHTML).join("");

  // Navigate to thread
  feed.querySelectorAll(".tweet").forEach(el => {
    el.addEventListener("click", e => {
      if (e.target.closest("[data-stop]")) return;
      window.location.href = `thread.html?id=${el.dataset.id}`;
    });
    el.addEventListener("keydown", e => {
      if (e.key === "Enter") window.location.href = `thread.html?id=${el.dataset.id}`;
    });
  });

  // Love button
  feed.querySelectorAll(".action.like").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      toggleLove(id);
      btn.classList.toggle("liked");
      updateProgress();

      // Fade out then re-render
      const article = btn.closest(".tweet");
      article.style.transition = "opacity 0.25s";
      article.style.opacity = "0";
      setTimeout(() => renderFeed(), 280);
    });
  });

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
  activeNav = "home";
  document.getElementById("nav-home").classList.add("active");
  document.getElementById("nav-loved").classList.remove("active");
  document.getElementById("nav-loved").classList.remove("nav-loved-active");
  renderFeed();
});

document.getElementById("nav-loved").addEventListener("click", () => {
  activeNav = "loved";
  document.getElementById("nav-loved").classList.add("active");
  document.getElementById("nav-loved").classList.add("nav-loved-active");
  document.getElementById("nav-home").classList.remove("active");
  renderFeed();
});

renderFeed();

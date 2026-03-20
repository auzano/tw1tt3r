// ── THREAD ──

// ── STORAGE (mirror of app.js) ──
function getLoved() {
  try { return new Set(JSON.parse(localStorage.getItem("loved") || "[]")); }
  catch { return new Set(); }
}
function saveLoved(set) {
  localStorage.setItem("loved", JSON.stringify([...set]));
}
function toggleLove(id) {
  const loved = getLoved();
  if (loved.has(String(id))) loved.delete(String(id));
  else loved.add(String(id));
  saveLoved(loved);
}

function renderHashtags(text) {
  return text.replace(/#(\w+)/g, '<span class="hashtag">#$1</span>');
}

function renderNewlines(text) {
  return renderHashtags(text).replace(/\n/g, "<br>");
}

function init() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10);
  const post = posts.find(p => p.id === id);

  if (!post) {
    document.getElementById("thread-feed").innerHTML =
      '<p style="padding:32px 16px;color:var(--text-secondary);">Post tidak ditemukan.</p>';
    return;
  }

  // Back button
  document.getElementById("back-btn").addEventListener("click", () => history.back());

  const feed = document.getElementById("thread-feed");

  const isLoved = getLoved().has(String(post.id));

  // ── MAIN TWEET (focal tweet, Twitter-style bigger) ──
  const main = document.createElement("article");
  main.className = "tweet tweet-focal";
  main.innerHTML = `
    <div class="tweet-focal-header">
      <div class="tweet-avi tweet-avi-link" style="background:${post.account.bg};">${post.account.emoji}</div>
      <div class="tweet-focal-account tweet-account-link">
        <div class="tweet-name">${post.account.name}</div>
        <div class="tweet-handle">${post.account.handle}</div>
      </div>
      <div class="tweet-cat-badge" style="background:${post.account.bg}22;color:${post.account.bg};border-color:${post.account.bg}44;">
        ${post.category.charAt(0).toUpperCase() + post.category.slice(1)}
      </div>
    </div>
    <div class="tweet-focal-text">${renderNewlines(post.text)}</div>
    ${post.image ? `<div class="tweet-img-wrap tweet-img-wrap--focal"><img class="tweet-img" src="${post.image}" alt="" loading="lazy" onerror="this.closest('.tweet-img-wrap').style.display='none'" /></div>` : ""}
    <div class="tweet-focal-time">${post.time} · baca.</div>
    <div class="tweet-focal-divider"></div>
    <div class="tweet-actions">
      <div class="action comment"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div>
      <div class="action repost"><svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg></div>
      <div class="action like ${isLoved ? "liked" : ""}"><svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg></div>
    </div>
  `;
  feed.appendChild(main);

  // Click account → go to feed filtered by category
  main.querySelectorAll(".tweet-avi-link, .tweet-account-link, .tweet-cat-badge").forEach(el => {
    el.addEventListener("click", () => {
      window.location.href = `index.html?tab=${post.category}`;
    });
  });

  main.querySelector(".action.like").addEventListener("click", function () {
    toggleLove(post.id);
    this.classList.toggle("liked");
  });

  // ── THREAD TWEETS ──
  (post.thread || []).forEach((item, i) => {
    const isLast = i === post.thread.length - 1;
    const el = document.createElement("article");
    el.className = "tweet tweet-thread";

    if (item.isSource) {
      el.innerHTML = `
        <div class="thread-line-wrap">
          <div class="tweet-avi" style="background:${post.account.bg};">${post.account.emoji}</div>
        </div>
        <div class="tweet-body">
          <div class="tweet-header">
            <span class="tweet-name">${post.account.name}</span>
            <span class="tweet-handle">${post.account.handle}</span>
          </div>
          <a href="${item.source.url}" target="_blank" rel="noopener" class="source-link">
            <div class="source-card">
              <div class="source-card-inner">
                <div class="source-card-text">
                  <div class="source-label">${item.source.label}</div>
                  <div class="source-domain">${new URL(item.source.url).hostname.replace("www.", "")}</div>
                </div>
                <div class="source-arrow">↗</div>
              </div>
            </div>
          </a>
        </div>
      `;
    } else {
      el.innerHTML = `
        <div class="thread-line-wrap">
          <div class="tweet-avi" style="background:${post.account.bg};">${post.account.emoji}</div>
        </div>
        <div class="tweet-body">
          <div class="tweet-header">
            <span class="tweet-name">${post.account.name}</span>
            <span class="tweet-handle">${post.account.handle}</span>
          </div>
          <div class="tweet-text">${renderNewlines(item.text)}</div>
          ${item.image ? `<div class="tweet-img-wrap"><img class="tweet-img" src="${item.image}" alt="" loading="lazy" onerror="this.closest('.tweet-img-wrap').style.display='none'" /></div>` : ""}
          <div class="tweet-actions">
            <div class="action comment"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div>
            <div class="action repost"><svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg></div>
            <div class="action like"><svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg></div>
          </div>
        </div>
      `;
      el.querySelector(".action.like").addEventListener("click", function () {
        toggleLove(post.id);
        this.classList.toggle("liked");
      });
    }

    feed.appendChild(el);
  });
}

init();

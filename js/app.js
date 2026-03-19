// ── APP ──

let activeTab = "all";

function renderHashtags(text) {
  return text.replace(/#(\w+)/g, '<span class="hashtag">#$1</span>');
}

function tweetHTML(post) {
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
          <div class="action like" title="Suka" data-stop>
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderFeed() {
  const feed = document.getElementById("feed");
  const empty = document.getElementById("empty");
  const filtered = activeTab === "all"
    ? posts
    : posts.filter(p => p.category === activeTab);

  if (filtered.length === 0) {
    feed.innerHTML = "";
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";
  feed.innerHTML = filtered.map(tweetHTML).join("");

  // Navigate to thread on tweet click
  feed.querySelectorAll(".tweet").forEach(el => {
    el.addEventListener("click", e => {
      if (e.target.closest("[data-stop]")) return;
      const id = el.dataset.id;
      window.location.href = `thread.html?id=${id}`;
    });
    el.addEventListener("keydown", e => {
      if (e.key === "Enter") window.location.href = `thread.html?id=${el.dataset.id}`;
    });
  });

  // Like toggle (visual only)
  feed.querySelectorAll(".action.like").forEach(btn => {
    btn.addEventListener("click", () => btn.classList.toggle("liked"));
  });
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

renderFeed();

// ── STATS ──

// ── STORAGE ──
function getLoved() {
  try { return new Set(JSON.parse(localStorage.getItem("loved") || "[]")); }
  catch { return new Set(); }
}

// ── STREAK ──
function getStreak() {
  try {
    const data = JSON.parse(localStorage.getItem("streak") || "{}");
    return { count: data.count || 0, lastDate: data.lastDate || null };
  } catch { return { count: 0, lastDate: null }; }
}

function updateStreak() {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const streak = getStreak();

  if (streak.lastDate === today) return streak; // already counted today

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  const newCount = streak.lastDate === yesterday ? streak.count + 1 : 1;
  const updated = { count: newCount, lastDate: today };
  localStorage.setItem("streak", JSON.stringify(updated));
  return updated;
}

// ── COMPUTE STATS ──
function computeStats() {
  const loved    = getLoved();
  const total    = posts.length;
  const streak   = updateStreak();

  // Filter loved IDs that exist in posts
  const lovedPosts = posts.filter(p => loved.has(String(p.id)));
  const lovedCount = lovedPosts.length;
  const pct        = total === 0 ? 0 : Math.round((lovedCount / total) * 100);

  // Category breakdown
  const catCount = {};
  lovedPosts.forEach(p => {
    catCount[p.category] = (catCount[p.category] || 0) + 1;
  });
  const catSorted = Object.entries(catCount).sort((a, b) => b[1] - a[1]);
  const topCat    = catSorted[0]?.[0] || null;

  // Threads read estimate (loved posts × avg thread length)
  const avgThread = lovedPosts.reduce((sum, p) => sum + (p.thread?.length || 0), 0)
    / (lovedPosts.length || 1);
  const factsRead = Math.round(lovedPosts.reduce((sum, p) =>
    sum + (p.thread?.filter(t => !t.isSource).length || 0), 0));

  return { lovedCount, total, pct, streak, catSorted, topCat, factsRead };
}

// ── CATEGORY LABELS ──
const CAT_LABEL = {
  trivia:    "Trivia",
  history:   "History",
  language:  "Language",
  geography: "Geography",
  science:   "Science",
};

const CAT_COLOR = {
  trivia:    "#1d9bf0",
  history:   "#794bc4",
  language:  "#e0a800",
  geography: "#0d9488",
  science:   "#ff7043",
};

// ── STREAK EMOJI ──
function streakEmoji(n) {
  if (n >= 30) return "🔥🔥🔥";
  if (n >= 14) return "🔥🔥";
  if (n >= 3)  return "🔥";
  return "✨";
}

// ── RENDER ──
function render() {
  const s    = computeStats();
  const page = document.getElementById("stats-page");

  // Build category bars
  const catBars = s.catSorted.map(([cat, count]) => {
    const pct = s.lovedCount === 0 ? 0 : Math.round((count / s.lovedCount) * 100);
    return `
      <div class="stat-cat-row">
        <div class="stat-cat-label">${CAT_LABEL[cat] || cat}</div>
        <div class="stat-cat-bar-wrap">
          <div class="stat-cat-bar" style="width:${pct}%;background:${CAT_COLOR[cat] || "#555"};"></div>
        </div>
        <div class="stat-cat-count">${count}</div>
      </div>
    `;
  }).join("") || `<p class="stat-empty">Love some posts to see your breakdown.</p>`;

  page.innerHTML = `

    <!-- AVATAR BLOCK -->
    <div class="stat-hero">
      <div class="stat-avatar">z</div>
      <div class="stat-name">@auzano</div>
      <div class="stat-bio">tw1tt3r · personal feed</div>
    </div>

    <!-- STREAK -->
    <div class="stat-streak-block">
      <div class="stat-streak-num">${s.streak.count}</div>
      <div class="stat-streak-label">${streakEmoji(s.streak.count)} day streak</div>
      <div class="stat-streak-sub">${
        s.streak.count === 0
          ? "Open the app daily to build your streak"
          : s.streak.count === 1
          ? "Come back tomorrow to keep it going!"
          : `${s.streak.count} days in a row — keep it up!`
      }</div>
    </div>

    <!-- STAT CARDS -->
    <div class="stat-cards">
      <div class="stat-card">
        <div class="stat-card-num">${s.lovedCount}</div>
        <div class="stat-card-label">posts read</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-num">${s.pct}%</div>
        <div class="stat-card-label">completed</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-num">${s.factsRead}</div>
        <div class="stat-card-label">facts absorbed</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-num">${s.total - s.lovedCount}</div>
        <div class="stat-card-label">left to read</div>
      </div>
    </div>

    <!-- PROGRESS -->
    <div class="stat-section">
      <div class="stat-section-title">Overall progress</div>
      <div class="stat-progress-track">
        <div class="stat-progress-fill" style="width:${s.pct}%"></div>
      </div>
      <div class="stat-progress-label">${s.lovedCount} of ${s.total} posts</div>
    </div>

    <!-- CATEGORY BREAKDOWN -->
    <div class="stat-section">
      <div class="stat-section-title">By category</div>
      <div class="stat-cats">${catBars}</div>
    </div>

    ${s.topCat ? `
    <div class="stat-section">
      <div class="stat-top-cat">
        Your most read category is
        <span style="color:${CAT_COLOR[s.topCat]};font-weight:700;">${CAT_LABEL[s.topCat] || s.topCat}</span>
      </div>
    </div>
    ` : ""}

  `;
}

document.getElementById("back-btn").addEventListener("click", () => history.back());
render();

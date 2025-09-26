let recentSearches = [];
let lastResults = [];

async function generateKeywords() {
  const seed = document.getElementById('seedKeyword').value.trim();
  if (!seed) return alert('Please enter a seed keyword');

  // Update last search time
  const time = new Date().toLocaleTimeString();
  document.getElementById('lastSearchTime').textContent = time;

  // Recent searches
  recentSearches = [seed, ...recentSearches.filter(s=>s!==seed)].slice(0,5);
  renderRecent();

  const resultsEl = document.getElementById('results');
  resultsEl.innerHTML = `
    <div class="empty-state">
      <div class="empty-icon">⏳</div>
      <h3>Generating Keywords…</h3>
      <p>Please wait while we analyze</p>
    </div>`;

  try {
    const res = await fetch('/api/keywords',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({seedKeyword:seed})
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message);

    // Update stats
    document.getElementById('totalCount').textContent = data.totalResults;
    const avg = Math.round(data.keywords.reduce((a,k)=>a+k.searchVolume,0)/data.totalResults);
    document.getElementById('avgVolume').textContent = avg.toLocaleString();
    const lowCount = data.keywords.filter(k=>k.competition<30).length;
    document.getElementById('lowCompPercent').textContent = Math.round(lowCount/data.totalResults*100)+'%';

    lastResults = data.keywords;
    renderResults(data.keywords);
  } catch(err) {
    resultsEl.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">❌</div>
        <h3>Error</h3><p>${err.message}</p>
      </div>`;
  }
}

function renderRecent() {
  const el = document.getElementById('recentChips');
  el.innerHTML = recentSearches.length
    ? recentSearches.map(s=>`<span class="chip" onclick="selectRecent('${s}')">${s}</span>`).join('')
    : '<span class="chip">No recent searches</span>';
}

function selectRecent(s) {
  document.getElementById('seedKeyword').value = s;
  generateKeywords();
}

function renderResults(items) {
  const el = document.getElementById('results');
  el.innerHTML = items.map(k=>`
    <div class="result-card">
      <div class="result-header">
        <div class="result-rank">#${k.rank}</div>
      </div>
      <div class="result-title">${k.keyword}</div>
      <div class="result-metrics">
        <div class="metric-item"><span class="metric-label">Vol</span><span class="metric-value">${k.searchVolume.toLocaleString()}</span></div>
        <div class="metric-item"><span class="metric-label">Comp</span><span class="metric-value">${k.competition}%</span></div>
        <div class="metric-item"><span class="metric-label">Diff</span><span class="metric-value">${k.difficulty}%</span></div>
        <div class="metric-item"><span class="metric-label">CPC</span><span class="metric-value">$${k.cpc.toFixed(2)}</span></div>
      </div>
    </div>`).join('');
}

function exportCSV() {
  if (!lastResults.length) return alert('No data to export');
  const rows = [
    ['Rank','Keyword','Volume','Comp','Diff','CPC'],
    ...lastResults.map(k=>[k.rank,k.keyword,k.searchVolume,k.competition,k.difficulty,k.cpc])
  ];
  const csv = rows.map(r=>r.join(',')).join('\n');
  const blob = new Blob([csv],{type:'text/csv'}),url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download='keywords.csv';a.click();
  URL.revokeObjectURL(url);
}

function toggleTheme() {
  const html = document.documentElement;
  const cur = html.getAttribute('data-theme');
  const next = cur==='dark'?'light':'dark';
  html.setAttribute('data-theme', next);
  document.getElementById('darkToggle').classList.toggle('active', next==='dark');
  document.getElementById('lightToggle').classList.toggle('active', next==='light');
}

function refreshPage() { location.reload(); }
function clearRecent() {
  recentSearches=[]; renderRecent();
}

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('seedKeyword').focus();
  renderRecent();
});


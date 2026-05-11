// ── STATE ────────────────────────────────────────────
let currentPage = 'home';
let searchIndex = [];

// ── INIT ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildSearchIndex();
  
  // Handle hash routing
  const hash = window.location.hash.replace('#', '') || 'home';
  navigate(hash, false);
  
  // Keyboard shortcut for search
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      document.getElementById('searchInput').focus();
      document.getElementById('searchOverlay').classList.add('active');
    }
    if (e.key === 'Escape') {
      closeSearch();
    }
  });

  // Theme
  const saved = localStorage.getItem('cv-docs-theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});

// ── NAVIGATION ────────────────────────────────────────
function navigate(pageId, pushState = true) {
  const page = PAGES[pageId] || PAGES['home'];
  currentPage = pageId;

  // Update URL
  if (pushState) {
    window.history.pushState({ page: pageId }, '', `#${pageId}`);
  }

  // Update content
  const container = document.getElementById('pageContent');
  container.innerHTML = renderPage(page);

  // Update active nav
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.page === pageId);
  });

  // Scroll to top
  document.querySelector('.main-content').scrollTop = 0;
  window.scrollTo(0, 0);

  // Build TOC
  buildTOC();

  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');

  // Close search
  closeSearch();
}

window.addEventListener('popstate', e => {
  const pageId = (e.state && e.state.page) || window.location.hash.replace('#', '') || 'home';
  navigate(pageId, false);
});

// ── RENDER ────────────────────────────────────────────
function renderPage(page) {
  if (page.title === 'CaseVault Documentation') {
    // Home page — no header structure
    return page.content;
  }

  return `
    <div class="page-header">
      ${page.badge ? `<div class="page-badge">${page.badge}</div>` : ''}
      <h1 class="page-title">${page.title}</h1>
      ${page.lead ? `<div class="page-lead">${page.lead}</div>` : ''}
    </div>
    ${page.content}
    ${renderPageNav()}
  `;
}

function renderPageNav() {
  const pages = Object.keys(PAGES);
  const currentIdx = pages.indexOf(currentPage);
  const prevId = currentIdx > 0 ? pages[currentIdx - 1] : null;
  const nextId = currentIdx < pages.length - 1 ? pages[currentIdx + 1] : null;

  if (!prevId && !nextId) return '';

  return `
    <div style="display:flex;justify-content:space-between;margin-top:48px;padding-top:24px;border-top:1px solid var(--border);">
      ${prevId && prevId !== 'home' ? `
        <a href="#" onclick="navigate('${prevId}')" style="display:flex;flex-direction:column;gap:2px;text-decoration:none;">
          <span style="font-size:12px;color:var(--text-faint);">← Previous</span>
          <span style="font-size:14px;font-weight:600;color:var(--accent);">${PAGES[prevId].title}</span>
        </a>
      ` : '<div></div>'}
      ${nextId ? `
        <a href="#" onclick="navigate('${nextId}')" style="display:flex;flex-direction:column;gap:2px;text-decoration:none;text-align:right;">
          <span style="font-size:12px;color:var(--text-faint);">Next →</span>
          <span style="font-size:14px;font-weight:600;color:var(--accent);">${PAGES[nextId].title}</span>
        </a>
      ` : '<div></div>'}
    </div>
  `;
}

// ── TABLE OF CONTENTS ─────────────────────────────────
function buildTOC() {
  const content = document.getElementById('pageContent');
  const headings = content.querySelectorAll('h2, h3');
  const toc = document.getElementById('tocNav');
  const tocSidebar = document.getElementById('tocSidebar');

  if (headings.length < 2) {
    tocSidebar.style.display = 'none';
    return;
  }

  tocSidebar.style.display = 'block';
  toc.innerHTML = '';

  headings.forEach((heading, i) => {
    const id = `heading-${i}`;
    heading.id = id;

    const link = document.createElement('a');
    link.href = `#${id}`;
    link.className = `toc-link ${heading.tagName === 'H3' ? 'toc-h3' : ''}`;
    link.textContent = heading.textContent;
    link.addEventListener('click', e => {
      e.preventDefault();
      heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    toc.appendChild(link);
  });

  // Highlight active heading on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        toc.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
        const activeLink = toc.querySelector(`a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { rootMargin: '-20px 0px -80% 0px' });

  headings.forEach(h => observer.observe(h));
}

// ── SEARCH ────────────────────────────────────────────
function buildSearchIndex() {
  searchIndex = [];
  Object.entries(PAGES).forEach(([id, page]) => {
    // Strip HTML tags for text content
    const div = document.createElement('div');
    div.innerHTML = page.content || '';
    const text = div.textContent.toLowerCase();

    searchIndex.push({
      id,
      title: page.title,
      badge: page.badge || '',
      lead: page.lead || '',
      text,
      excerpt: (page.lead || div.textContent.slice(0, 120)).trim()
    });
  });
}

function handleSearch(query) {
  const overlay = document.getElementById('searchOverlay');
  const results = document.getElementById('searchResults');

  if (!query || query.trim().length < 2) {
    overlay.classList.remove('active');
    return;
  }

  overlay.classList.add('active');
  const q = query.toLowerCase().trim();

  const matches = searchIndex
    .filter(p => p.id !== 'home' && (
      p.title.toLowerCase().includes(q) ||
      p.lead.toLowerCase().includes(q) ||
      p.text.includes(q)
    ))
    .slice(0, 8);

  if (matches.length === 0) {
    results.innerHTML = `<div class="search-empty">No results found for "<strong>${query}</strong>"</div>`;
    return;
  }

  results.innerHTML = matches.map(m => `
    <div class="search-result-item" onclick="navigate('${m.id}')">
      <svg class="search-result-icon" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 13l-3.5-3.5M10 6.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      <div>
        <div class="search-result-section">${m.badge}</div>
        <div class="search-result-title">${highlight(m.title, q)}</div>
        <div class="search-result-excerpt">${highlight(m.excerpt, q)}</div>
      </div>
    </div>
  `).join('');
}

function highlight(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark style="background:rgba(37,99,235,0.15);color:var(--accent);border-radius:2px;padding:0 1px;">$1</mark>');
}

function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('active');
  document.getElementById('searchInput').value = '';
}

// Search input focus
document.getElementById('searchInput').addEventListener('focus', () => {
  const val = document.getElementById('searchInput').value;
  if (val.length >= 2) {
    document.getElementById('searchOverlay').classList.add('active');
  }
});

// ── THEME ─────────────────────────────────────────────
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('cv-docs-theme', next);
}

// ── MOBILE SIDEBAR ────────────────────────────────────
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}

// ── FAQ ───────────────────────────────────────────────
function toggleFaq(questionEl) {
  const item = questionEl.parentElement;
  item.classList.toggle('open');
}

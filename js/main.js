/**
 * Main Application Logic & Interactions
 * Supports Dynamic English / Arabic Language Switching, Warm Particle Canvas, Modals, and Filtering.
 */

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initNavbar();
  initTypewriter();
  initStatsCounter();
  initModals();
  initContactForm();
  initCopyToClipboard();
  initBackToTop();
});

/* ==========================================================================
   1. Theme Management (Dark / Light Theme)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('portfolio_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio_theme', newTheme);

      showToast(currentLang === 'ar' ? `تم تفعيل الوضع ${newTheme === 'dark' ? 'الليلي' : 'النهاري'}` : `Switched to ${newTheme.toUpperCase()} mode`, 'info');
    });
  }
}

/* ==========================================================================
   2. Language Management (English / Arabic & RTL)
   ========================================================================== */
function initLanguage() {
  const savedLang = localStorage.getItem('portfolio_lang') || 'en';
  setLanguage(savedLang, false);

  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const targetLang = currentLang === 'en' ? 'ar' : 'en';
      setLanguage(targetLang, true);
    });
  }
}

function setLanguage(lang, notify = true) {
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);

  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  const dict = window.PORTFOLIO_DATA?.i18n?.[lang] || {};

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update elements with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update language toggle button label
  const langToggleText = document.getElementById('lang-toggle-text');
  if (langToggleText) {
    langToggleText.textContent = dict.langToggleText || (lang === 'en' ? 'العربية' : 'English');
  }

  // Re-render dynamic portfolio components for the selected language
  initPortfolioDataRendering();
  resetTypewriter();

  if (notify) {
    showToast(dict.toastLangSwitched || (lang === 'ar' ? 'تم التبديل إلى اللغة العربية' : 'Switched to English'), 'success');
  }
}

/* ==========================================================================
   3. Navigation & Mobile Drawer
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  const sections = document.querySelectorAll('section[id]');
  if (sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
              } else if (link.getAttribute('href')?.startsWith('#')) {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((sec) => observer.observe(sec));
  }
}

/* ==========================================================================
   4. Dynamic Typewriter Role Effect (English & Arabic)
   ========================================================================== */
let typewriterTimeout = null;

function resetTypewriter() {
  if (typewriterTimeout) {
    clearTimeout(typewriterTimeout);
    typewriterTimeout = null;
  }
  initTypewriter();
}

function initTypewriter() {
  const target = document.getElementById('typed-role');
  if (!target) return;

  if (typewriterTimeout) {
    clearTimeout(typewriterTimeout);
    typewriterTimeout = null;
  }

  const roles = window.PORTFOLIO_DATA?.rolesTyped?.[currentLang] || [
    "Computer Science",
    "Game Developer"
  ];
  if (!roles || roles.length === 0) return;

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 75;
  const deleteSpeed = 30;
  const pauseEnd = 2000;

  // Clear text on init to avoid lingering characters from other language
  target.textContent = '';

  function type() {
    const currentRole = roles[roleIdx] || "";

    if (isDeleting) {
      target.textContent = currentRole.substring(0, Math.max(0, charIdx - 1));
      charIdx--;
    } else {
      target.textContent = currentRole.substring(0, Math.min(currentRole.length, charIdx + 1));
      charIdx++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIdx >= currentRole.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIdx <= 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 350;
    }

    typewriterTimeout = setTimeout(type, delay);
  }

  type();
}

/* ==========================================================================
   6. Animated Number Counter for Stats
   ========================================================================== */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  if (statNumbers.length === 0) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      statNumbers.forEach((el) => {
        const target = parseFloat(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1600;
        const start = performance.now();

        function updateCount(timestamp) {
          const progress = Math.min((timestamp - start) / duration, 1);
          const current = progress * target;

          el.textContent = Math.floor(current) + suffix;

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            el.textContent = target + suffix;
          }
        }

        requestAnimationFrame(updateCount);
      });
    }
  }, { threshold: 0.15 });

  const statsSection = document.querySelector('.hero-info-cards-grid') || document.querySelector('.hero-stats') || document.getElementById('hero');
  if (statsSection) observer.observe(statsSection);
}

/* ==========================================================================
   7. Dynamic Portfolio Data Rendering
   ========================================================================== */
function initPortfolioDataRendering() {
  if (!window.PORTFOLIO_DATA) return;
  const data = window.PORTFOLIO_DATA;
  const lang = currentLang;

  // Profile text updates
  const profile = data.profile[lang];
  if (profile) {
    const heroIntro = document.getElementById('hero-intro-text');
    if (heroIntro) heroIntro.textContent = profile.bio;

    const statusBadge = document.getElementById('status-badge-text');
    if (statusBadge) statusBadge.textContent = profile.status;
  }

  // 1. Render Top Projects (Home Page)
  const topProjectsGrid = document.getElementById('top-projects-grid');
  if (topProjectsGrid && data.projects) {
    topProjectsGrid.innerHTML = data.projects.map(project => createProjectCardHTML(project, lang)).join('');
  }

  // 2. Render Full Projects (Projects Page)
  const allProjectsGrid = document.getElementById('all-projects-grid');
  if (allProjectsGrid && data.projects) {
    renderProjectsCatalog(data.projects, lang);
    setupProjectsFiltering(data.projects);
  }

  // 3. Render Certifications Section (Home Page)
  const certsGrid = document.getElementById('certifications-grid');
  if (certsGrid && data.certifications) {
    certsGrid.innerHTML = data.certifications.map(cert => createCertCardHTML(cert, lang)).join('');
  }

  // 4. Render Skills Grid
  const skillsGrid = document.getElementById('skills-grid');
  const skillsList = data.skills[lang];
  if (skillsGrid && skillsList) {
    skillsGrid.innerHTML = skillsList.map(cat => `
      <div class="skill-category-card">
        <div class="skill-category-header">
          <div class="skill-cat-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              ${getSkillIconSvg(cat.icon)}
            </svg>
          </div>
          <h3 class="skill-cat-title">${cat.category}</h3>
        </div>
        <div class="skill-items-list">
          ${cat.items.map(item => `<span class="skill-item-badge">${item}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // Re-attach modal listeners
  attachProjectModalTriggers();
  attachCertModalTriggers();
}

function createProjectCardHTML(project, lang) {
  const content = project[lang] || project.en;
  const categoryName = lang === 'ar' ? project.categoryNameAr : project.categoryNameEn;
  const dict = window.PORTFOLIO_DATA?.i18n?.[lang] || {};

  // If project has an image, render img; else render stylish animated placeholder banner
  const imageHTML = project.image ? `
    <img src="${project.image}" alt="${content.title}" class="project-img" loading="lazy">
  ` : `
    <div class="project-placeholder-banner">
      <div class="placeholder-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          ${project.icon === 'gamepad' ? getGamepadIconSvg() : getGlobeIconSvg()}
        </svg>
      </div>
      <span class="placeholder-tag">${lang === 'ar' ? 'مشروع نشط' : 'Active Project'}</span>
    </div>
  `;

  return `
    <article class="project-card" data-category="${project.category}">
      <div class="project-image-wrap">
        <span class="project-category-tag">${categoryName}</span>
        ${imageHTML}
      </div>
      <div class="project-card-body">
        <h3 class="project-title">${content.title}</h3>
        <p class="project-description">${content.tagline}</p>
        <div class="project-tags">
          ${project.tags.map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>
        <div class="project-card-footer">
          <button class="btn btn-secondary btn-sm open-project-modal" data-project-id="${project.id}">
            <span>${dict.modalDetailsBtn || 'Details'}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="${lang === 'ar' ? 'M19 12H5M12 19l-7-7 7-7' : 'M5 12h14M12 5l7 7-7 7'}"/>
            </svg>
          </button>
          <div class="project-actions">
            ${project.githubUrl ? `
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="action-link" title="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            ` : ''}
            ${project.demoUrl ? `
              <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="action-link" title="Demo">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    </article>
  `;
}

function createCertCardHTML(cert, lang) {
  const content = cert[lang] || cert.en;
  const dict = window.PORTFOLIO_DATA?.i18n?.[lang] || {};

  return `
    <div class="cert-card">
      <div class="cert-header">
        <div class="cert-icon-badge">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            ${getCertIconSvg(cert.issuerIcon)}
          </svg>
        </div>
        <div class="cert-meta">
          <h3 class="cert-title">${content.title}</h3>
          <p class="cert-issuer">${content.issuer}</p>
        </div>
      </div>
      <div class="cert-body">
        <p class="cert-description">${content.description}</p>
        <div class="cert-skills-wrap">
          ${content.skills.map(s => `<span class="cert-skill-tag">${s}</span>`).join('')}
        </div>
      </div>
      <div class="cert-footer">
        <span class="cert-verified-pill">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          ${dict.certsVerifiedBadge || 'Verified Credential'}
        </span>
        <button class="btn btn-outline btn-sm open-cert-modal" data-cert-id="${cert.id}">
          ${dict.certsVerifyBtn || 'View Details'}
        </button>
      </div>
    </div>
  `;
}

/* Helpers for SVG icons */
function getSkillIconSvg(type) {
  switch (type) {
    case 'code':
      return '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>';
    case 'globe':
      return '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>';
    case 'tool':
      return '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>';
    case 'users':
      return '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>';
    default:
      return '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>';
  }
}

function getGamepadIconSvg() {
  return '<rect x="2" y="6" width="20" height="12" rx="4"></rect><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><circle cx="15" cy="11" r="1" fill="currentColor"></circle><circle cx="17" cy="13" r="1" fill="currentColor"></circle>';
}

function getGlobeIconSvg() {
  return '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>';
}

function getCertIconSvg(type) {
  switch (type) {
    case 'math':
      return '<path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"/>';
    case 'code':
      return '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>';
    case 'grid':
      return '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>';
    case 'star':
      return '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>';
    case 'award':
      return '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>';
    case 'cpu':
      return '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>';
    case 'database':
      return '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>';
    default:
      return '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>';
  }
}

/* ==========================================================================
   8. Projects Filtering & Search (Projects Page)
   ========================================================================== */
function renderProjectsCatalog(projects, lang = currentLang) {
  const grid = document.getElementById('all-projects-grid');
  if (!grid) return;

  if (projects.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-secondary);">
        <h3>${lang === 'ar' ? 'لا توجد مشاريع تطابق بحثك الحالي.' : 'No projects match your search or filter criteria.'}</h3>
        <p style="margin-top: 0.5rem;">${lang === 'ar' ? 'يرجى تجربة البحث بكلمات أخرى.' : 'Try clearing the search or choosing another category.'}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = projects.map(p => createProjectCardHTML(p, lang)).join('');
  attachProjectModalTriggers();
}

function setupProjectsFiltering(allProjects) {
  const searchInput = document.getElementById('project-search');
  const filterButtons = document.querySelectorAll('.filter-btn');

  let activeCategory = 'all';
  let searchTerm = '';

  function applyFilters() {
    const lang = currentLang;
    const filtered = allProjects.filter(p => {
      const content = p[lang] || p.en;
      const matchesCat = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch = searchTerm === '' ||
        content.title.toLowerCase().includes(searchTerm) ||
        content.tagline.toLowerCase().includes(searchTerm) ||
        p.tags.some(t => t.toLowerCase().includes(searchTerm));

      return matchesCat && matchesSearch;
    });

    renderProjectsCatalog(filtered, lang);
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }
}

/* ==========================================================================
   9. Modals System (Projects & Certifications)
   ========================================================================== */
function initModals() {
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close-btn');

  if (overlay && closeBtn) {
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeModal();
      }
    });
  }
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function openModal(contentHtml) {
  const overlay = document.getElementById('modal-overlay');
  const container = document.getElementById('modal-content-body');
  if (overlay && container) {
    container.innerHTML = contentHtml;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function attachProjectModalTriggers() {
  document.querySelectorAll('.open-project-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.getAttribute('data-project-id');
      const project = window.PORTFOLIO_DATA?.projects?.find(p => p.id === pid);
      const lang = currentLang;
      const dict = window.PORTFOLIO_DATA?.i18n?.[lang] || {};

      if (project) {
        const content = project[lang] || project.en;
        const categoryName = lang === 'ar' ? project.categoryNameAr : project.categoryNameEn;

        const mediaHeader = project.image ? `
          <div style="width: 100%; height: 260px; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.5rem;">
            <img src="${project.image}" alt="${content.title}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
        ` : `
          <div class="project-placeholder-banner" style="height: 180px; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
            <div class="placeholder-icon" style="width: 68px; height: 68px;">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${project.icon === 'gamepad' ? getGamepadIconSvg() : getGlobeIconSvg()}
              </svg>
            </div>
          </div>
        `;

        const modalHtml = `
          <div class="project-modal-view">
            ${mediaHeader}
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
              <span class="project-category-tag" style="position: static;">${categoryName}</span>
              <div style="display: flex; gap: 0.75rem;">
                ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="btn btn-secondary btn-sm">${dict.modalGithubBtn || 'GitHub'}</a>` : ''}
                ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" class="btn btn-primary btn-sm">${dict.modalLaunchDemoBtn || 'Launch Demo'}</a>` : ''}
              </div>
            </div>
            <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem;">${content.title}</h2>
            <p style="color: var(--accent-orange); font-weight: 700; margin-bottom: 1.25rem;">${content.tagline}</p>
            
            <h4 style="margin-bottom: 0.5rem;">${dict.modalDetailsTitle || 'Overview & Architecture'}</h4>
            <p style="color: var(--text-secondary); line-height: 1.75; margin-bottom: 1.5rem;">${content.overview || content.tagline}</p>

            ${content.highlights ? `
              <h4 style="margin-bottom: 0.5rem;">${dict.modalHighlightsTitle || 'Key Engineering Highlights'}</h4>
              <ul style="color: var(--text-secondary); line-height: 1.75; margin-bottom: 1.5rem; padding-${lang === 'ar' ? 'right' : 'left'}: 1.25rem; list-style-type: disc;">
                ${content.highlights.map(h => `<li>${h}</li>`).join('')}
              </ul>
            ` : ''}

            <h4 style="margin-bottom: 0.5rem;">${dict.modalTechTitle || 'Technologies & Tools'}</h4>
            <div class="project-tags" style="margin-bottom: 1rem;">
              ${project.tags.map(t => `<span class="tech-pill">${t}</span>`).join('')}
            </div>
          </div>
        `;
        openModal(modalHtml);
      }
    });
  });
}

function attachCertModalTriggers() {
  document.querySelectorAll('.open-cert-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const cid = btn.getAttribute('data-cert-id');
      const cert = window.PORTFOLIO_DATA?.certifications?.find(c => c.id === cid);
      const lang = currentLang;
      const dict = window.PORTFOLIO_DATA?.i18n?.[lang] || {};

      if (cert) {
        const content = cert[lang] || cert.en;
        const modalHtml = `
          <div class="cert-modal-view" style="text-align: center; padding: 1rem 0;">
            <div style="width: 68px; height: 68px; border-radius: 50%; background: rgba(255, 94, 54, 0.15); border: 2px solid var(--accent-orange); color: var(--accent-yellow); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto;">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <span class="cert-verified-pill" style="margin-bottom: 1rem;">${dict.certsVerifiedBadge || 'Official Verified Credential'}</span>
            <h2 style="font-size: 1.6rem; margin-bottom: 0.5rem;">${content.title}</h2>
            <p style="color: var(--accent-orange); font-weight: 700; font-size: 1.1rem; margin-bottom: 1.5rem;">${content.issuer}</p>

            <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; text-align: ${lang === 'ar' ? 'right' : 'left'}; margin-bottom: 1.5rem;">
              <div style="margin-bottom: 0.75rem;"><strong style="color: var(--text-muted); font-size: 0.8rem; text-transform: uppercase;">${lang === 'ar' ? 'معرف الاعتماد:' : 'Credential ID:'}</strong> <span style="font-family: var(--font-mono); color: var(--accent-yellow);">${content.credentialId}</span></div>
              <div style="margin-bottom: 0.75rem;"><strong style="color: var(--text-muted); font-size: 0.8rem; text-transform: uppercase;">${lang === 'ar' ? 'حالة الاعتماد:' : 'Status:'}</strong> <span style="color: var(--accent-emerald); font-weight: 700;">${lang === 'ar' ? 'معتمد وموثق' : 'Active / Valid'}</span></div>
              <div><strong style="color: var(--text-muted); font-size: 0.8rem; text-transform: uppercase;">${lang === 'ar' ? 'الوصف والتفاصيل:' : 'Description:'}</strong> <p style="color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.6;">${content.description}</p></div>
            </div>

            <div style="display: flex; justify-content: center; gap: 1rem;">
              <a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                <span>${dict.modalOpenAuthorityBtn || 'Open LinkedIn Certifications'}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
        `;
        openModal(modalHtml);
      }
    });
  });
}

/* ==========================================================================
   10. Contact Form & Validation
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dict = window.PORTFOLIO_DATA?.i18n?.[currentLang] || {};

    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const message = document.getElementById('contact-message')?.value.trim();
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!name || !email || !message) {
      showToast(dict.toastFormError || 'Please fill out all required fields.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast(currentLang === 'ar' ? 'يرجى إدخال عنوان بريد إلكتروني صحيح.' : 'Please enter a valid email address.', 'error');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10"></path></svg>
        <span>${dict.formSendingBtn || 'Sending...'}</span>
      `;
    }

    setTimeout(() => {
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span>${dict.formSubmitBtn || 'Send Message'}</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        `;
      }
      showToast(dict.toastFormSuccess || 'Thank you! Your message has been sent successfully.', 'success');
    }, 1200);
  });
}

/* ==========================================================================
   11. Copy To Clipboard
   ========================================================================== */
function initCopyToClipboard() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      const dict = window.PORTFOLIO_DATA?.i18n?.[currentLang] || {};
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`${dict.toastCopied || 'Copied to clipboard:'} ${textToCopy}`, 'success');
        }).catch(() => {
          showToast(currentLang === 'ar' ? 'فشل النسخ إلى الحافظة' : 'Failed to copy to clipboard', 'error');
        });
      }
    });
  });
}

/* ==========================================================================
   12. Toast Notifications
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;

  const iconSvg = type === 'success'
    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'
    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';

  toast.innerHTML = `
    ${iconSvg}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

/* ==========================================================================
   13. Floating Back To Top
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

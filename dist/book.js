const chapters = [
  { label: 'Introduction', page: 0 },
  { label: 'Profile', page: 1 },
  { label: 'Capabilities', page: 2 },
  { label: 'Selected work', page: 3 },
  { label: 'Education', page: 7 },
  { label: 'Contact', page: 8 }
];

const projects = [
  {
    number: '01', name: 'FINBOT', category: 'PERSONAL FINANCE · CHATBOT',
    premise: 'Helping people manage their finances through a conversational interface.',
    problem: 'Financial decisions can be difficult to organize and understand.',
    product: 'A personal finance chatbot designed to help users manage their finances intelligently.',
    focus: 'Conversational product thinking',
    url: 'https://github.com/Sarvajith2007/FINBOT', linkLabel: 'VIEW REPOSITORY',
    diagram: ['USER QUESTION', 'FINBOT', 'FINANCIAL GUIDANCE']
  },
  {
    number: '02', name: 'Innovision', category: 'EDUCATION · PROFILE VALIDATION',
    premise: 'A clearer path from student information to profile verification.',
    problem: 'Student profile checks need a structured, easier-to-follow process.',
    product: 'A student profile validation platform designed to streamline verification.',
    focus: 'Validation workflows',
    url: 'https://github.com/Sarvajith2007/Innovision', linkLabel: 'VIEW REPOSITORY',
    diagram: ['STUDENT PROFILE', 'VALIDATION', 'VERIFIED RECORD']
  },
  {
    number: '03', name: 'PulsePick AI', category: 'AI-ASSISTED DISCOVERY · ELECTRONICS',
    premise: 'Product discovery guided by what a person actually needs.',
    problem: 'Large electronics catalogs can make choosing the right product difficult.',
    product: 'An AI-powered, intent-aware recommendation engine for electronic products.',
    focus: 'Intent-led recommendations',
    url: 'https://github.com/Sarvajith2007/PULSE_PICK_AI', linkLabel: 'VIEW REPOSITORY',
    diagram: ['USER NEED', 'INTENT', 'RECOMMENDATION']
  },
  {
    number: '04', name: 'SparkHub', category: 'CAMPUS · COLLABORATION',
    premise: 'Turning campus problems into opportunities to work together.',
    problem: 'Student learning often stays theoretical even when real campus problems are visible.',
    product: 'A dashboard for students to surface campus problems, collaborate, and work toward real-world solutions.',
    focus: 'Collaborative problem solving',
    url: 'https://spark-hub-theta.vercel.app/', linkLabel: 'VISIT LIVE PROJECT',
    diagram: ['CAMPUS PROBLEM', 'COLLABORATION', 'SOLUTION']
  }
];

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const externalLink = (url, label, extraClass = '') => `<a class="text-link ${extraClass}" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>`;

const pages = [
  {
    section: 'INTRODUCTION', slug: 'cover',
    render: () => `<div class="cover-layout">
      <div class="cover-index"><span>PORTFOLIO / 2026</span><span>VOL. 01</span></div>
      <div class="cover-main">
        <span class="eyebrow"><span class="eyebrow-rule"></span> ENGINEERING PORTFOLIO</span>
        <h1>Adi Sarvajith<br><em>Rayudu.</em></h1>
        <p class="cover-lead">Building practical web products while developing toward <strong>back-end and AI engineering.</strong></p>
      </div>
      <div class="cover-footer">
        <div><span class="micro-label">CURRENTLY</span><strong>Computer science student</strong><span>VBIT · 2024–2028</span></div>
        <div><span class="micro-label">DIRECTION</span><strong>Back-End / AI Engineering</strong><span>Hyderabad, Telangana</span></div>
        <button class="cover-open" type="button" data-go="1">OPEN THE PORTFOLIO <span aria-hidden="true">→</span></button>
      </div>
      <div class="cover-seal" aria-hidden="true"><span>ASR</span><small>SELECTED<br>WORK</small></div>
    </div>`
  },
  {
    section: 'PROFILE', slug: 'profile',
    render: () => `<div class="inner-page profile-page">
      <div class="section-kicker"><span>01 / PROFILE</span><span>THE PERSON BEHIND THE WORK</span></div>
      <h2>Curious by nature.<br><em>Deliberate in practice.</em></h2>
      <div class="profile-grid">
        <p class="large-copy">I am a computer science student developing a strong foundation in web development while working toward back-end and AI engineering.</p>
        <div class="body-stack"><p>I enjoy translating a problem into a clear product idea, building with care, and learning through the process. My projects span personal finance, student verification, product discovery, and campus collaboration.</p><p>I bring attention to detail, problem solving, communication, and a willingness to work with others.</p></div>
      </div>
      <div class="profile-band"><div><span class="micro-label">BASED IN</span><strong>Hyderabad, Telangana</strong></div><div><span class="micro-label">FOCUS</span><strong>Back-End &amp; AI Engineering</strong></div><div><span class="micro-label">CURRENT STAGE</span><strong>Undergraduate · 2024–2028</strong></div></div>
    </div>`
  },
  {
    section: 'CAPABILITIES', slug: 'capabilities',
    render: () => `<div class="inner-page capabilities-page">
      <div class="section-kicker"><span>02 / CAPABILITIES</span><span>A FOUNDATION BUILT THROUGH PRACTICE</span></div>
      <h2>What I bring<br><em>to the table.</em></h2>
      <div class="capability-list">
        <div class="capability-row"><span class="capability-num">01</span><div><h3>Web foundations</h3><p>HTML5, CSS3, JavaScript basics, and responsive design.</p></div><span class="capability-mark">↗</span></div>
        <div class="capability-row"><span class="capability-num">02</span><div><h3>Development workflow</h3><p>Git and GitHub for organizing and sharing project work.</p></div><span class="capability-mark">↗</span></div>
        <div class="capability-row"><span class="capability-num">03</span><div><h3>Working style</h3><p>Problem solving, effective communication, and team collaboration.</p></div><span class="capability-mark">↗</span></div>
      </div>
      <div class="direction-note"><span class="micro-label">WHERE I AM HEADED</span><p>Applying these foundations to increasingly challenging back-end and AI engineering problems.</p></div>
    </div>`
  },
  ...projects.map(project => ({
    section: 'SELECTED WORK', slug: project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    render: () => `<div class="inner-page project-page">
      <div class="section-kicker"><span>03 / SELECTED WORK</span><span>PROJECT ${project.number} OF 04</span></div>
      <div class="project-head"><span class="project-type">${escapeHtml(project.category)}</span><h2>${escapeHtml(project.name)}<span class="project-period">.</span></h2><p class="project-premise">${escapeHtml(project.premise)}</p></div>
      <div class="flow" aria-label="Conceptual product flow">${project.diagram.map((step, index) => `<div class="flow-node"><span>0${index + 1}</span><strong>${escapeHtml(step)}</strong></div>${index < project.diagram.length - 1 ? '<span class="flow-arrow" aria-hidden="true">→</span>' : ''}`).join('')}</div>
      <div class="project-facts"><div><span class="micro-label">THE PROBLEM</span><p>${escapeHtml(project.problem)}</p></div><div><span class="micro-label">THE PROJECT</span><p>${escapeHtml(project.product)}</p></div></div>
      <div class="project-footer"><span class="project-focus"><span class="micro-label">PROJECT FOCUS</span> ${escapeHtml(project.focus)}</span>${externalLink(project.url, project.linkLabel)}</div>
    </div>`
  })),
  {
    section: 'EDUCATION', slug: 'education',
    render: () => `<div class="inner-page education-page">
      <div class="section-kicker"><span>04 / EDUCATION</span><span>FOUNDATIONS &amp; CONTINUED LEARNING</span></div>
      <h2>Learning with<br><em>purpose.</em></h2>
      <div class="timeline"><div class="timeline-item"><span class="timeline-year">2024 — 2028</span><div><h3>Vignana Bharathi Institute of Technology</h3><p>Undergraduate studies · Hyderabad, Telangana</p></div></div><div class="timeline-item"><span class="timeline-year">2024</span><div><h3>Little Flower</h3><p>High school</p></div></div></div>
      <div class="certificate"><span class="micro-label">CERTIFICATION</span><h3>Python through hands-on projects</h3><p>Elewayte Organization</p>${externalLink('https://www.elewayte.com/certificate/verify-certificate/3299c0ae199eab75fd667db5419b19f52340e808/ic820260139', 'VERIFY CERTIFICATE')}</div>
    </div>`
  },
  {
    section: 'CONTACT', slug: 'contact',
    render: () => `<div class="inner-page contact-page">
      <div class="section-kicker"><span>05 / CONTACT</span><span>THE NEXT CONVERSATION</span></div>
      <span class="contact-pretitle">THANK YOU FOR READING</span>
      <h2>Let’s discuss<br><em>what I can build next.</em></h2>
      <p class="contact-copy">I am seeking opportunities to grow in back-end and AI engineering, contribute to meaningful products, and learn from strong teams.</p>
      <div class="contact-list"><a href="mailto:asarvajithrayudu@gmail.com"><span>EMAIL</span><strong>asarvajithrayudu@gmail.com</strong><span aria-hidden="true">↗</span></a><a href="tel:+919849300139"><span>PHONE</span><strong>+91 98493 00139</strong><span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/sarvajith-rayudu-adi-4aa647381" target="_blank" rel="noopener noreferrer"><span>LINKEDIN</span><strong>www.linkedin.com/in/sarvajith-rayudu-adi-4aa647381</strong><span aria-hidden="true">↗</span></a></div>
      <div class="contact-footer"><a class="text-link" href="./resume.html" target="_blank">PRINTABLE RESUME <span aria-hidden="true">↗</span></a><span>ADI SARVAJITH RAYUDU / HYDERABAD</span></div>
    </div>`
  }
];

const pageEl = document.getElementById('page');
const chapterNav = document.getElementById('chapter-nav');
const pageIndicator = document.getElementById('page-indicator');
const pageFolio = document.getElementById('page-folio');
const chapterLabel = document.getElementById('chapter-label');
const progressFill = document.getElementById('progress-fill');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let current = 0;
let touchStart = null;

chapterNav.innerHTML = chapters.map((chapter, index) => `<button type="button" data-page="${chapter.page}"><span>0${index + 1}</span>${chapter.label}</button>`).join('');

function render(animate = false, direction = 1) {
  const page = pages[current];
  pageEl.className = `page page-${page.slug}`;
  pageEl.innerHTML = page.render();
  pageEl.setAttribute('aria-label', `Page ${current + 1} of ${pages.length}: ${page.section.toLowerCase()}`);
  chapterLabel.textContent = page.section;
  pageIndicator.textContent = `${String(current + 1).padStart(2, '0')} / ${String(pages.length).padStart(2, '0')}`;
  pageFolio.textContent = String(current + 1).padStart(2, '0');
  progressFill.style.width = `${(current + 1) / pages.length * 100}%`;
  prevButton.disabled = current === 0;
  nextButton.disabled = current === pages.length - 1;
  nextButton.innerHTML = current === pages.length - 2 ? 'FINAL PAGE <span aria-hidden="true">→</span>' : 'NEXT <span aria-hidden="true">→</span>';
  chapterNav.querySelectorAll('button').forEach((button, index) => {
    const active = current >= chapters[index].page && (index === chapters.length - 1 || current < chapters[index + 1].page);
    button.classList.toggle('active', active);
    if (active) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current');
  });
  pageEl.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => goTo(Number(button.dataset.go))));
  pageEl.scrollTop = 0;
  if (animate && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    pageEl.classList.add(direction > 0 ? 'turn-forward' : 'turn-back');
  }
  const hash = current === 0 ? 'cover' : page.slug;
  if (location.hash.slice(1) !== hash) history.replaceState(null, '', `#${hash}`);
}

function goTo(index) {
  if (index < 0 || index >= pages.length || index === current) return;
  const direction = Math.sign(index - current);
  current = index;
  render(true, direction);
}

prevButton.addEventListener('click', () => goTo(current - 1));
nextButton.addEventListener('click', () => goTo(current + 1));
chapterNav.addEventListener('click', event => {
  const button = event.target.closest('button[data-page]');
  if (button) goTo(Number(button.dataset.page));
});
document.addEventListener('keydown', event => {
  if (event.altKey || event.ctrlKey || event.metaKey || ['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)) return;
  if (event.key === 'ArrowRight') { event.preventDefault(); goTo(current + 1); }
  if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(current - 1); }
});
pageEl.addEventListener('touchstart', event => { touchStart = { x: event.changedTouches[0].screenX, y: event.changedTouches[0].screenY }; }, { passive: true });
pageEl.addEventListener('touchend', event => {
  if (!touchStart) return;
  const dx = event.changedTouches[0].screenX - touchStart.x;
  const dy = event.changedTouches[0].screenY - touchStart.y;
  if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.3) goTo(current + (dx < 0 ? 1 : -1));
  touchStart = null;
}, { passive: true });
window.addEventListener('hashchange', () => {
  const index = pages.findIndex(page => page.slug === location.hash.slice(1));
  if (index >= 0) goTo(index);
});
const initialPage = pages.findIndex(page => page.slug === location.hash.slice(1));
if (initialPage >= 0) current = initialPage;
render();

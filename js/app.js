(() => {
  'use strict';
  const english = {
    skip: 'Skip to content', nav_projects: 'Projects', nav_about: 'About me', nav_skills: 'Stack', nav_certifications: 'Credentials', nav_contact: 'Let’s talk',
    hero_greeting: 'Hi, I’m', hero_tagline: 'From a good idea to a great product.',
    hero_description: 'I build web applications, integrate AI, and design cloud solutions. Clear code, simple experiences, and products that solve real problems.',
    cta_projects: 'Explore projects', cta_contact: 'Let’s connect', available_short: 'Open to opportunities', portrait_role: 'Developer & maker', currently_building: 'Currently building', light_label: 'Light', scene_crystal: 'Crystal',
    strip_intro: 'From frontend to cloud.', strip_ai: 'Artificial intelligence', projects_eyebrow: '01 / SELECTED WORK', projects_title: 'Ideas, shipped.',
    projects_summary: 'AI, automation, and the web. A selection of what I’ve been building.', current_startup: 'MY STARTUP · NAMTAFLABS',
    intone_tagline: 'Less friction.\nMore possibilities.', intone_description: 'A lab for AI-powered productivity tools. I build solutions that automate tasks and help developers focus on creating.', visit_intone: 'Explore Intone',
    lucid_description: 'Turning voice into insight. AI-powered recognition, analysis, and real-time transcription, within the Intone ecosystem.',
    stock_description: 'Inventory, under control. Stock tracking, expiry alerts, and Odoo API integration in a single system.',
    prompt_description: 'Better conversations with AI. A prompt engineering tool to refine instructions and get better results.',
    scripts_description: 'Small tools. Fewer repetitive tasks. Browser extensions and automation scripts that simplify everyday work.',
    all_projects: 'More code and experiments on GitHub', about_eyebrow: '02 / BEHIND THE CODE', about_title: 'Curiosity to explore.\nClarity to build.',
    about_lead: 'I’m a Full Stack Developer in Chile, focused on cloud, artificial intelligence, and experiences that feel simple.',
    about_description: 'I’m building Intone under NAMTAFLABS, my lab for intelligent tools. I enjoy connecting every part of a product: from a clear interface to reliable architecture.',
    about_philosophy: 'My approach: ship, listen to users, and improve. Learn quickly, collaborate, and care about the details.', about_link: 'Meet me on LinkedIn',
    languages_label: 'WITHOUT BARRIERS', languages_title: 'Three languages.\nMore connections.', spanish: 'Spanish', native: 'Native', english: 'English', portuguese: 'Portuguese', conversational: 'Conversational',
    philosophy_quote: 'Technology matters when it makes life simpler.', skills_eyebrow: '03 / MY TOOLKIT', skills_title: 'The pieces of the product.',
    skills_summary: 'A full stack to connect the experience, the logic, and the infrastructure.', frontend_description: 'Clear, fast, responsive interfaces.', backend_description: 'The logic that makes it all work.', cloud_description: 'Infrastructure built to grow with confidence.',
    soft_intro: 'And beyond the stack:', soft_problem: 'Problem solving', soft_teamwork: 'Collaboration', soft_learn: 'Fast learning', soft_product: 'Product thinking',
    certifications_eyebrow: '04 / ALWAYS LEARNING', certifications_title: 'Knowledge to build on.', certifications_summary: 'A solid foundation in cloud architecture, AI, and data analytics.',
    certified: 'AWS certification', microcredential: 'AWS micro-credential', professional_certificate: 'Professional certificate',
    contact_availability: 'Available for freelance and full-time opportunities', contact_title: 'The next good idea\nstarts with a conversation.',
    contact_description: 'A project in mind, an opportunity, or just a hello? I’d love to hear from you.', contact_cta: 'Say hello', copy_email: 'Copy email', footer_location: 'Made with intention, from Chile.'
  };
  const nodes = [...document.querySelectorAll('[data-i18n]')];
  const spanishNodes = new Map(nodes.map(node => [node, [...node.childNodes].map(child => child.cloneNode(true))]));
  const root = document.documentElement;
  const languageButton = document.querySelector('#language-toggle');
  const themeButton = document.querySelector('#theme-toggle');
  const menuButton = document.querySelector('#menu-toggle');
  const navLinks = document.querySelector('#nav-links');
  const toast = document.querySelector('#toast');
  let language = 'es';
  let toastTimer;
  const readPreference = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const savePreference = (key, value) => { try { localStorage.setItem(key, value); } catch { /* Preferences are optional. */ } };
  const translatedLabel = (es, en) => language === 'es' ? es : en;

  function updateControlLabels() {
    const dark = root.dataset.theme === 'dark';
    themeButton.setAttribute('aria-label', dark ? translatedLabel('Activar modo claro', 'Switch to light mode') : translatedLabel('Activar modo oscuro', 'Switch to dark mode'));
    themeButton.setAttribute('aria-pressed', String(dark));
    menuButton.setAttribute('aria-label', menuButton.getAttribute('aria-expanded') === 'true' ? translatedLabel('Cerrar menú', 'Close menu') : translatedLabel('Abrir menú', 'Open menu'));
    document.querySelector('.nav').setAttribute('aria-label', translatedLabel('Principal', 'Main navigation'));
    document.querySelector('.light-controls').setAttribute('aria-label', translatedLabel('Iluminación de la página', 'Page lighting'));
  }
  function setLanguage(next) {
    language = next === 'en' ? 'en' : 'es';
    root.lang = language;
    for (const node of nodes) {
      if (language === 'es') node.replaceChildren(...spanishNodes.get(node).map(child => child.cloneNode(true)));
      else if (english[node.dataset.i18n]) {
        const lines = english[node.dataset.i18n].split('\n');
        node.replaceChildren(...lines.flatMap((line, index) => index ? [document.createElement('br'), document.createTextNode(line)] : [document.createTextNode(line)]));
      }
    }
    languageButton.textContent = language === 'es' ? 'EN' : 'ES';
    languageButton.setAttribute('aria-label', language === 'es' ? 'Switch to English' : 'Cambiar a español');
    document.title = 'Emiliano Gómez — Full Stack Developer & Cloud';
    const description = translatedLabel('Desarrollador Full Stack de Chile y AWS Solutions Architect – Associate. Construyo productos con IA, automatización y arquitectura cloud.', 'Full Stack Developer from Chile and AWS Solutions Architect – Associate. Building products with AI, automation, and cloud architecture.');
    document.querySelector('meta[name="description"]').content = description;
    document.querySelector('meta[property="og:description"]').content = description;
    document.querySelector('meta[property="og:locale"]').content = language === 'es' ? 'es_CL' : 'en_US';
    updateControlLabels();
    savePreference('portfolio-language', language);
  }
  function setTheme(next) {
    root.dataset.theme = next === 'dark' ? 'dark' : 'light';
    document.querySelector('meta[name="theme-color"]').content = root.dataset.theme === 'dark' ? '#111722' : '#f4f6fb';
    updateControlLabels();
    savePreference('portfolio-theme', root.dataset.theme);
  }
  const requestedLanguage = new URLSearchParams(location.search).get('lang');
  setLanguage(['es', 'en'].includes(requestedLanguage) ? requestedLanguage : readPreference('portfolio-language'));
  setTheme(readPreference('portfolio-theme'));
  languageButton.addEventListener('click', () => setLanguage(language === 'es' ? 'en' : 'es'));
  themeButton.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
  document.querySelector('#year').textContent = new Date().getFullYear();

  function setMenu(open) {
    navLinks.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    updateControlLabels();
  }
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  navLinks.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('click', event => { if (!event.target.closest('.nav')) setMenu(false); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') { setMenu(false); menuButton.focus(); }
  });
  matchMedia('(min-width: 721px)').addEventListener('change', event => { if (event.matches) setMenu(false); });

  document.querySelector('#copy-email').addEventListener('click', async () => {
    let message;
    try {
      await navigator.clipboard.writeText('gomez.emiliano762@gmail.com');
      message = translatedLabel('Email copiado. ¡Conversemos!', 'Email copied. Let’s talk!');
    } catch {
      message = translatedLabel('Puedes escribir a gomez.emiliano762@gmail.com', 'You can write to gomez.emiliano762@gmail.com');
    }
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.hidden = false;
    toastTimer = setTimeout(() => { toast.hidden = true; }, 4500);
  });

  if ('IntersectionObserver' in window) {
    const sections = [...document.querySelectorAll('main section[id]')];
    const activeSections = new Set();
    const updateNavigation = () => {
      const current = sections.filter(section => activeSections.has(section.id)).at(-1);
      navLinks.querySelectorAll('a').forEach(link => {
        if (current && link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    };
    const navigationObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting ? activeSections.add(entry.target.id) : activeSections.delete(entry.target.id));
      updateNavigation();
    }, { rootMargin: '-12% 0px -60% 0px' });
    sections.forEach(section => navigationObserver.observe(section));

    const motionQuery = matchMedia('(prefers-reduced-motion: reduce)');
    if (!motionQuery.matches) {
      const reveals = [...document.querySelectorAll('.reveal')];
      const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.remove('pending'); revealObserver.unobserve(entry.target); }
      }), { threshold: .06 });
      reveals.forEach(element => { element.classList.add('pending'); revealObserver.observe(element); });
      root.classList.add('motion-ready');
      motionQuery.addEventListener('change', event => {
        if (event.matches) { root.classList.remove('motion-ready'); revealObserver.disconnect(); }
      });
    }
  }
})();

(() => {
  'use strict';
  const root = document.documentElement;
  const sceneButtons = [...document.querySelectorAll('[data-scene]')];
  const scenes = new Set(sceneButtons.map(button => button.dataset.scene));
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  let frame = 0;
  let lastFrame = 0;
  let latestPointer;
  let activeSurface;
  let activeRect;
  let heroRect;
  let inHero = false;
  const portrait = document.querySelector('.portrait-card');
  const hero = document.querySelector('.hero');
  const surfaces = [...document.querySelectorAll('.project-card, .stack-card, .detail-card, .cert-card, .contact-panel, .portrait-card')];

  function setScene(scene) {
    root.dataset.light = scenes.has(scene) ? scene : 'aurora';
    sceneButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.scene === root.dataset.light)));
    try { localStorage.setItem('portfolio-light', root.dataset.light); } catch { /* Optional preference. */ }
  }
  let savedScene;
  try { savedScene = localStorage.getItem('portfolio-light'); } catch { /* Optional preference. */ }
  setScene(savedScene);
  sceneButtons.forEach(button => button.addEventListener('click', () => setScene(button.dataset.scene)));

  function resetLight() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    latestPointer = null;
    root.classList.remove('pointer-light');
    portrait.style.removeProperty('--tilt-x');
    portrait.style.removeProperty('--tilt-y');
  }
  function paintLight(time) {
    frame = 0;
    if (!latestPointer || motion.matches || !finePointer.matches || document.hidden) return;
    // Cap pointer lighting at 30 fps; ambient animation lives on composited layers.
    if (time - lastFrame < 32) { frame = requestAnimationFrame(paintLight); return; }
    lastFrame = time;
    const { x, y } = latestPointer;
    root.style.setProperty('--pointer-x', `${(x - innerWidth / 2) * .7}px`);
    root.style.setProperty('--pointer-y', `${(y - innerHeight / 2) * .7}px`);
    if (activeSurface && activeRect) {
      activeSurface.style.setProperty('--spot-x', `${((x - activeRect.left) / activeRect.width * 100).toFixed(1)}%`);
      activeSurface.style.setProperty('--spot-y', `${((y - activeRect.top) / activeRect.height * 100).toFixed(1)}%`);
    }
    if (inHero && heroRect) {
      const horizontal = (x - heroRect.left) / heroRect.width - .5;
      const vertical = (y - heroRect.top) / heroRect.height - .5;
      portrait.style.setProperty('--tilt-y', `${(horizontal * 8).toFixed(2)}deg`);
      portrait.style.setProperty('--tilt-x', `${(-vertical * 6).toFixed(2)}deg`);
    }
  }
  document.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch' || motion.matches || !finePointer.matches) return;
    latestPointer = { x: event.clientX, y: event.clientY };
    root.classList.add('pointer-light');
    if (!frame) frame = requestAnimationFrame(paintLight);
  }, { passive: true });
  surfaces.forEach(surface => {
    surface.addEventListener('pointerenter', () => {
      if (motion.matches || !finePointer.matches) return;
      activeSurface = surface;
      activeRect = surface.getBoundingClientRect();
    });
    surface.addEventListener('pointerleave', () => {
      if (activeSurface === surface) { activeSurface = null; activeRect = null; }
    });
  });
  hero.addEventListener('pointerenter', () => { inHero = true; heroRect = hero.getBoundingClientRect(); });
  hero.addEventListener('pointerleave', () => {
    inHero = false;
    portrait.style.removeProperty('--tilt-x');
    portrait.style.removeProperty('--tilt-y');
  });
  // Cached rectangles are refreshed after scrolling, never during every pointer frame.
  window.addEventListener('scroll', () => {
    if (activeSurface) activeRect = activeSurface.getBoundingClientRect();
    if (inHero) heroRect = hero.getBoundingClientRect();
  }, { passive: true });
  window.addEventListener('resize', () => { activeRect = activeSurface?.getBoundingClientRect(); heroRect = hero.getBoundingClientRect(); }, { passive: true });
  document.documentElement.addEventListener('pointerleave', resetLight);
  document.addEventListener('visibilitychange', () => { if (document.hidden) resetLight(); });
  motion.addEventListener('change', resetLight);
  finePointer.addEventListener('change', resetLight);

  // Animate the featured artwork only while it is visible.
  if ('IntersectionObserver' in window) {
    const artObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle('is-in-view', entry.isIntersecting));
    }, { threshold: .08 });
    artObserver.observe(document.querySelector('.featured-project'));
  }
})();

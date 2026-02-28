'use strict';

/* ─────────────────────────────────────────
   i18n Translations
───────────────────────────────────────── */
const i18n = {
  en: {
    'nav-badge':    'Privacy Policy',
    'hero-tag':     'Last updated Feb 28, 2026 · Active from this date',
    'hero-title':   'Privacy <span class="grad-text">Policy</span>',
    'hero-sub':     'PureCode — Code Screenshot &amp; Export',
    'hero-desc':    'We built PureCode with a simple belief: your code is yours. No tracking, no data collection, no exceptions.',

    'c1-title':   'Our Commitment',
    'c1-sub':     'Privacy by design',
    'c1-p1':      'PureCode is built with privacy as a core principle. We do <strong>not</strong> collect, store, transmit, or share any personal data. Everything you do in PureCode stays entirely on your device.',
    'c1-callout': 'PureCode has no servers, no accounts, no analytics, and no third-party SDKs. Your code and images <strong>never leave your device</strong>.',

    'c2-title':  'What We Do NOT Collect',
    'c2-sub':    'Absolutely nothing',
    'ch1': 'Personal information',
    'ch2': 'Code or snippets',
    'ch3': 'Usage analytics',
    'ch4': 'Crash reports',
    'ch5': 'Device identifiers',
    'ch6': 'Location data',
    'ch7': 'Advertising IDs',
    'ch8': 'Email or contacts',

    'c3-title': 'Photo Library Access',
    'c3-sub':   'Save only, never read',
    'c3-p1':    'PureCode requests permission to <strong>save</strong> images to your Photo Library when you tap "Download". This is the only system permission the app uses.',
    'c3-l1':    'Access is requested only when you explicitly choose to save an image.',
    'c3-l2':    'PureCode uses <em>add-only</em> access — it can save images but cannot read or browse your existing photos.',
    'c3-l3':    'No images are uploaded anywhere. Files are saved locally to your device only.',

    'c4-title': 'Local Storage',
    'c4-sub':   'Stays on your device',
    'c4-p1':    'PureCode saves your preferences (theme, background, font size, language, etc.) locally on your device using Apple\'s standard <code>UserDefaults</code> storage.',
    'c4-p2':    'This data never leaves your device and is not accessible to us or any third party.',

    'c5-title':   'No Network Requests',
    'c5-sub':     '100% offline',
    'c5-p1':      'PureCode works entirely offline. The app makes <strong>zero network requests</strong>. It does not connect to any servers, APIs, or external services.',
    'c5-callout': 'Syntax highlighting, image rendering, and all processing happen locally on your device — instantly.',

    'c6-title': 'Third-Party Services',
    'c6-sub':   'None, zero, nada',
    'c6-p1':    'PureCode does not integrate any third-party SDKs, analytics frameworks, advertising networks, or crash reporting tools. There are no third parties involved in the operation of this app.',

    'c7-title': "Children's Privacy",
    'c7-sub':   'Safe for everyone',
    'c7-p1':    'PureCode does not knowingly collect any information from anyone, including children under the age of 13. Because we collect no data at all, the app is safe for users of any age.',

    'c8-title': 'Changes to This Policy',
    'c8-sub':   "We'll keep you informed",
    'c8-p1':    'If we ever update this Privacy Policy, we will revise the effective date at the top of this page. We encourage you to review this page periodically.',
    'c8-p2':    'Given that PureCode collects no data, changes to this policy are unlikely to affect your privacy in any way.',

    'c9-title': 'Contact Us',
    'c9-sub':   "We're here to help",
    'c9-p1':    'If you have any questions or concerns about this Privacy Policy, feel free to reach out:',

    'footer-rights': 'All rights reserved.',
    'footer-sub':    'Made with ♥ for developers.',
  },

  ru: {
    'nav-badge':    'Конфиденциальность',
    'hero-tag':     'Обновлено 28 февраля 2026 · Актуально с этой даты',
    'hero-title':   'Политика <span class="grad-text">конфиденциальности</span>',
    'hero-sub':     'PureCode — скриншоты кода и экспорт',
    'hero-desc':    'PureCode создан с простым убеждением: твой код — только твой. Без слежки, без сбора данных, без исключений.',

    'c1-title':   'Наши обязательства',
    'c1-sub':     'Конфиденциальность в основе',
    'c1-p1':      'PureCode построен с конфиденциальностью как основным принципом. Мы <strong>не</strong> собираем, не храним, не передаём и не делимся никакими личными данными. Всё, что вы делаете в PureCode, остаётся на вашем устройстве.',
    'c1-callout': 'У PureCode нет серверов, аккаунтов, аналитики и сторонних SDK. Ваш код и изображения <strong>никогда не покидают ваше устройство</strong>.',

    'c2-title':  'Что мы НЕ собираем',
    'c2-sub':    'Абсолютно ничего',
    'ch1': 'Личные данные',
    'ch2': 'Код или сниппеты',
    'ch3': 'Аналитику использования',
    'ch4': 'Отчёты об ошибках',
    'ch5': 'Идентификаторы устройства',
    'ch6': 'Данные о местоположении',
    'ch7': 'Рекламные идентификаторы',
    'ch8': 'Email или контакты',

    'c3-title': 'Доступ к Фото',
    'c3-sub':   'Только запись, без чтения',
    'c3-p1':    'PureCode запрашивает разрешение на <strong>сохранение</strong> изображений в вашу Медиатеку при нажатии «Сохранить». Это единственное системное разрешение, которое использует приложение.',
    'c3-l1':    'Доступ запрашивается только тогда, когда вы явно выбираете сохранение изображения.',
    'c3-l2':    'PureCode использует доступ <em>только на запись</em> — он может сохранять изображения, но не может читать или просматривать ваши существующие фото.',
    'c3-l3':    'Изображения никуда не загружаются. Файлы сохраняются локально только на вашем устройстве.',

    'c4-title': 'Локальное хранилище',
    'c4-sub':   'Остаётся на устройстве',
    'c4-p1':    'PureCode сохраняет ваши настройки (тема, фон, размер шрифта, язык и т.д.) локально на вашем устройстве через стандартное хранилище Apple <code>UserDefaults</code>.',
    'c4-p2':    'Эти данные никогда не покидают ваше устройство и недоступны нам или третьим лицам.',

    'c5-title':   'Нет сетевых запросов',
    'c5-sub':     '100% офлайн',
    'c5-p1':      'PureCode работает полностью офлайн. Приложение делает <strong>ноль сетевых запросов</strong>. Оно не подключается ни к каким серверам, API или внешним сервисам.',
    'c5-callout': 'Подсветка синтаксиса, рендеринг изображений и вся обработка происходят локально на вашем устройстве — мгновенно.',

    'c6-title': 'Сторонние сервисы',
    'c6-sub':   'Их нет',
    'c6-p1':    'PureCode не интегрирует сторонние SDK, аналитику, рекламные сети или инструменты отчётов об ошибках. В работе приложения не участвуют никакие третьи стороны.',

    'c7-title': 'Конфиденциальность детей',
    'c7-sub':   'Безопасно для всех',
    'c7-p1':    'PureCode намеренно не собирает никакую информацию ни от кого, включая детей до 13 лет. Поскольку мы вообще не собираем данные, приложение безопасно для пользователей любого возраста.',

    'c8-title': 'Изменения политики',
    'c8-sub':   'Мы вас уведомим',
    'c8-p1':    'Если мы когда-либо обновим эту Политику конфиденциальности, мы изменим дату вступления в силу вверху страницы. Рекомендуем периодически просматривать эту страницу.',
    'c8-p2':    'Поскольку PureCode не собирает данных, изменения в этой политике вряд ли как-либо повлияют на вашу конфиденциальность.',

    'c9-title': 'Связаться с нами',
    'c9-sub':   'Мы всегда поможем',
    'c9-p1':    'Если у вас есть вопросы или опасения по поводу данной Политики конфиденциальности, свяжитесь с нами:',

    'footer-rights': 'Все права защищены.',
    'footer-sub':    'Сделано с ♥ для разработчиков.',
  },
};

/* ─────────────────────────────────────────
   Language switching
───────────────────────────────────────── */
let currentLang = localStorage.getItem('pc-lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('pc-lang', lang);
  document.documentElement.lang = lang;

  // Text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
  });

  // HTML nodes
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (i18n[lang][key] !== undefined) el.innerHTML = i18n[lang][key];
  });

  // Toggle button label
  const isEn = lang === 'en';
  document.getElementById('lang-flag').textContent  = isEn ? '🇷🇺' : '🇺🇸';
  document.getElementById('lang-label').textContent = isEn ? 'RU'  : 'EN';
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  const next = currentLang === 'en' ? 'ru' : 'en';

  // Animate swap
  const btn = document.getElementById('lang-toggle');
  btn.style.transform = 'scale(0.88)';
  setTimeout(() => {
    applyLang(next);
    btn.style.transform = '';
  }, 130);
});

// Apply on load
applyLang(currentLang);

/* ─────────────────────────────────────────
   Page load entrance
───────────────────────────────────────── */
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  requestAnimationFrame(initCanvas);
});

/* ─────────────────────────────────────────
   Navbar scroll behaviour
───────────────────────────────────────── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const heroBottom = document.getElementById('hero').offsetHeight;
  const scrollY    = window.scrollY;

  navbar.classList.toggle('visible',  scrollY > heroBottom * 0.6);
  navbar.classList.toggle('scrolled', scrollY > heroBottom);
}, { passive: true });

/* ─────────────────────────────────────────
   Scroll reveal
───────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const delay = parseInt(entry.target.dataset.delay || '0', 10);
    setTimeout(() => {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }, delay);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ─────────────────────────────────────────
   Check grid stagger
───────────────────────────────────────── */
const checkObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const items = entry.target.closest('.check-grid')?.querySelectorAll('li');
    if (!items) return;
    items.forEach((item, i) => {
      item.style.opacity   = '0';
      item.style.transform = 'translateY(12px)';
      setTimeout(() => {
        item.style.transition = 'opacity 0.45s ease, transform 0.45s ease, background 0.2s, border-color 0.2s';
        item.style.opacity    = '1';
        item.style.transform  = 'translateY(0)';
      }, i * 55);
    });
    checkObserver.unobserve(entry.target);
  });
}, { threshold: 0.2 });

document.querySelectorAll('.check-grid li').forEach(el => checkObserver.observe(el));

/* ─────────────────────────────────────────
   App icon parallax
───────────────────────────────────────── */
const icon = document.querySelector('.app-icon');
if (icon) {
  document.addEventListener('mousemove', (e) => {
    const rect = icon.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = (e.clientX - cx) / 280;
    const dy = (e.clientY - cy) / 280;
    icon.style.transform = `
      perspective(600px)
      rotateX(${-dy * 16}deg)
      rotateY(${dx * 16}deg)
    `;
  });
}

/* ─────────────────────────────────────────
   Particle canvas
───────────────────────────────────────── */
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles;
  const COUNT = 55;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() { this.reset(true); }
    reset(initial = false) {
      this.x   = Math.random() * W;
      this.y   = initial ? Math.random() * H : H + 10;
      this.r   = Math.random() * 1.8 + 0.4;
      this.vx  = (Math.random() - 0.5) * 0.25;
      this.vy  = -(Math.random() * 0.4 + 0.15);
      this.alpha    = 0;
      this.maxAlpha = Math.random() * 0.45 + 0.10;
      this.life     = 0;
      this.maxLife  = Math.random() * 300 + 200;
      const palette = ['140,77,255', '242,79,184', '77,120,255'];
      this.color = palette[Math.floor(Math.random() * palette.length)];
    }
    update() {
      this.x   += this.vx;
      this.y   += this.vy;
      this.life += 1;
      const half = this.maxLife * 0.5;
      if (this.life < half * 0.3)         this.alpha = (this.life / (half * 0.3)) * this.maxAlpha;
      else if (this.life > this.maxLife * 0.7) this.alpha = ((this.maxLife - this.life) / (this.maxLife * 0.3)) * this.maxAlpha;
      else                                this.alpha = this.maxAlpha;
      if (this.life >= this.maxLife || this.y < -10) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
      ctx.fill();
    }
  }

  function buildParticles() {
    particles = Array.from({ length: COUNT }, () => new Particle());
  }

  let animId;
  function animate() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(140,77,255,${(1 - d / 120) * 0.06})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    particles.forEach(p => { p.update(); p.draw(); });
    animId = requestAnimationFrame(animate);
  }

  resize();
  buildParticles();
  animate();

  window.addEventListener('resize', () => { resize(); buildParticles(); }, { passive: true });
  document.addEventListener('visibilitychange', () => {
    document.hidden ? cancelAnimationFrame(animId) : animate();
  });
}

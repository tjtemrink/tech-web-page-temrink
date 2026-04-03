// ===== Hero Network Animation =====
(function() {
  const canvas = document.getElementById('hero-network');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height, nodes, animId;
  const NODE_COUNT_DESKTOP = 60;
  const NODE_COUNT_MOBILE = 25;
  const CONNECTION_DIST = 150;
  const NAVY = { r: 27, g: 20, b: 100 };
  const RED = { r: 221, g: 0, b: 0 };

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createNodes() {
    const count = width < 768 ? NODE_COUNT_MOBILE : NODE_COUNT_DESKTOP;
    nodes = [];
    for (let i = 0; i < count; i++) {
      const isRed = Math.random() < 0.2;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.5,
        color: isRed ? RED : NAVY,
        alpha: Math.random() * 0.4 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }
  }

  function draw(time) {
    ctx.clearRect(0, 0, width, height);

    // Update positions
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < -10) n.x = width + 10;
      if (n.x > width + 10) n.x = -10;
      if (n.y < -10) n.y = height + 10;
      if (n.y > height + 10) n.y = -10;
    }

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DIST) {
          const opacity = (1 - dist / CONNECTION_DIST) * 0.15;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = 'rgba(255, 255, 255, ' + opacity + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      const pulse = Math.sin(time * n.pulseSpeed + n.pulseOffset) * 0.15 + 0.85;
      const alpha = n.alpha * pulse;
      const r = n.radius * pulse;

      // Glow
      ctx.beginPath();
      ctx.arc(n.x, n.y, r * 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + n.color.r + ',' + n.color.g + ',' + n.color.b + ',' + (alpha * 0.15) + ')';
      ctx.fill();

      // Core dot
      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, ' + alpha + ')';
      ctx.fill();
    }

    animId = requestAnimationFrame(draw);
  }

  function init() {
    resize();
    createNodes();
    animId = requestAnimationFrame(draw);
  }

  // Debounced resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      resize();
      createNodes();
    }, 200);
  });

  // Only animate when visible
  const heroSection = canvas.parentElement;
  const heroObserver = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
      if (!animId) animId = requestAnimationFrame(draw);
    } else {
      if (animId) { cancelAnimationFrame(animId); animId = null; }
    }
  }, { threshold: 0 });
  heroObserver.observe(heroSection);

  init();
})();

// ===== Header Scroll Effect =====
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== Mobile Menu =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    }
  });
}

// ===== FAQ Accordion =====
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const isActive = item.classList.contains('active');

    // Close all items
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

    // Toggle clicked item
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// ===== Scroll Animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== Contact Form Submission =====
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const company = document.getElementById('company').value;
    const teamSize = document.getElementById('team-size').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    const subject = 'New Inquiry from ' + firstName + ' ' + lastName;
    const body = 'Name: ' + firstName + ' ' + lastName + '\n'
      + 'Email: ' + email + '\n'
      + 'Phone: ' + (phone || 'Not provided') + '\n'
      + 'Company: ' + (company || 'Not provided') + '\n'
      + 'Team Size: ' + (teamSize || 'Not provided') + '\n'
      + 'Service Interest: ' + (service || 'Not provided') + '\n\n'
      + 'Message:\n' + message;

    const mailtoLink = 'mailto:assistant@temrink.com'
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(body);

    window.location.href = mailtoLink;

    // Show thank you message
    contactForm.innerHTML = '<div style="text-align:center;padding:60px 20px;">'
      + '<h3 style="color:#111827;margin-bottom:12px;">Thank you for reaching out!</h3>'
      + '<p style="color:#6B7280;">Your email client should open with your message. If it does not, please send your inquiry directly to <a href="mailto:assistant@temrink.com">assistant@temrink.com</a>.</p>'
      + '</div>';
  });
}

// ===== Cost Bar Animation =====
const costBars = document.querySelectorAll('.cost-bar-fill');
if (costBars.length > 0) {
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width;
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  costBars.forEach(bar => {
    bar.dataset.width = bar.style.width || getComputedStyle(bar).width;
    bar.style.width = '0';
    barObserver.observe(bar);
  });
}

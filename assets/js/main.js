const GA_MEASUREMENT_ID = 'G-51CBY9F45Z';

if (GA_MEASUREMENT_ID) {
  const analyticsScript = document.createElement('script');
  analyticsScript.async = true;
  analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  document.head.appendChild(analyticsScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
}

const navToggle = document.querySelector('.nav-toggle');
const primaryNavigation = document.querySelector('#primary-navigation');
const desktopNavigation = window.matchMedia('(min-width: 768px)');

if (navToggle && primaryNavigation) {
  const closeNavigation = () => {
    navToggle.setAttribute('aria-expanded', 'false');
    primaryNavigation.hidden = true;
  };

  const openNavigation = () => {
    navToggle.setAttribute('aria-expanded', 'true');
    primaryNavigation.hidden = false;
  };

  const syncNavigation = () => {
    if (desktopNavigation.matches) {
      navToggle.setAttribute('aria-expanded', 'false');
      primaryNavigation.hidden = false;
      return;
    }

    closeNavigation();
  };

  navToggle.addEventListener('click', () => {
    if (navToggle.getAttribute('aria-expanded') === 'true') {
      closeNavigation();
    } else {
      openNavigation();
    }
  });

  primaryNavigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (!desktopNavigation.matches) {
        closeNavigation();
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      closeNavigation();
      navToggle.focus();
    }
  });

  desktopNavigation.addEventListener('change', syncNavigation);
  syncNavigation();
}

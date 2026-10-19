const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const mobileScreen = window.matchMedia('(max-width: 759px)');

if (menuButton && navigation) {
  function closeMenu() {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.hidden = mobileScreen.matches;
  }

  function updateMenuLayout() {
    // Move focus before hiding a navigation link at a smaller viewport.
    if (mobileScreen.matches && navigation.contains(document.activeElement)) {
      menuButton.hidden = false;
      menuButton.focus();
    }
    if (!mobileScreen.matches && document.activeElement === menuButton) {
      navigation.hidden = false;
      navigation.querySelector('a').focus();
    }
    menuButton.hidden = !mobileScreen.matches;
    closeMenu();
  }

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.hidden = isOpen;
  });
  navigation.addEventListener('click', (event) => {
    if (mobileScreen.matches && event.target.closest('a')) {
      menuButton.focus();
      closeMenu();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileScreen.matches && !navigation.hidden) {
      menuButton.focus();
      closeMenu();
    }
  });
  mobileScreen.addEventListener('change', updateMenuLayout);
  updateMenuLayout();
}

const themeButton = document.querySelector('.theme-toggle');
if (themeButton) {
  const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let darkMode = preferredDark;
  try {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) darkMode = savedTheme === 'dark';
  } catch {
    // Theme switching still works when local file storage is unavailable.
  }

  function applyTheme() {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
    themeButton.setAttribute('aria-pressed', String(darkMode));
  }
  themeButton.hidden = false;
  applyTheme();
  themeButton.addEventListener('click', () => {
    darkMode = !darkMode;
    applyTheme();
    try {
      localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
    } catch {
      // Saving a preference is optional.
    }
  });
}

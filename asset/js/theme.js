// bg-mode
const params = new URLSearchParams(window.location.search);

const updateTheme = () => {
  let theme = 'day';

  const modeParam = params.get('mode');

  if (['day', 'evening', 'night'].includes(modeParam)) {
    theme = modeParam;
  } else {
    const hour = new Date().getHours();

    if (hour >= 18 && hour < 24) {
      theme = 'evening';
    } else if (hour >= 0 && hour < 6) {
      theme = 'night';
    }
  }

  document.body?.setAttribute('data-theme', theme);
};

document.addEventListener('DOMContentLoaded', updateTheme);


//night-cursor pointer
    const root = document.documentElement;

    window.addEventListener("mousemove", (e) => {
      root.style.setProperty("--x", e.clientX + "px");
      root.style.setProperty("--y", e.clientY + "px");
    });

    root.style.setProperty("--x", "50vw");
    root.style.setProperty("--y", "50vh");
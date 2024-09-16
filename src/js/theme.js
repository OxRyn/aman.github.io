function toggleDarkMode() {
  const body = document.body;
  const mobileIcon = document.querySelector("#darkModeBtn .material-icons");
  const desktopIcon = document.querySelector(
    "#darkModeBtnDesktop .material-icons"
  );

  // Toggle dark mode class on the body
  body.classList.toggle("dark");

  // Update icons for both mobile and desktop
  const iconText = body.classList.contains("dark")
    ? "brightness_7"
    : "brightness_4";
  if (mobileIcon) mobileIcon.textContent = iconText;
  if (desktopIcon) desktopIcon.textContent = iconText;

  // Store the theme preference in localStorage
  localStorage.theme = body.classList.contains("dark") ? "dark" : "light";
}

function checkThemePreference() {
  const body = document.body;
  const mobileIcon = document.querySelector("#darkModeBtn .material-icons");
  const desktopIcon = document.querySelector(
    "#darkModeBtnDesktop .material-icons"
  );

  const userPreference = localStorage.getItem("theme");
  const systemPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const isDarkMode =
    userPreference === "dark" || (!userPreference && systemPreference);

  // Set dark mode if preference is dark
  if (isDarkMode) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }

  // Update icons for both mobile and desktop
  const iconText = isDarkMode ? "brightness_7" : "brightness_4";
  if (mobileIcon) mobileIcon.textContent = iconText;
  if (desktopIcon) desktopIcon.textContent = iconText;
}

// Add event listeners for both mobile and desktop theme toggle buttons
const darkModeBtnMobile = document.getElementById("darkModeBtn");
const darkModeBtnDesktop = document.getElementById("darkModeBtnDesktop");

if (darkModeBtnMobile) {
  darkModeBtnMobile.addEventListener("click", toggleDarkMode);
}

if (darkModeBtnDesktop) {
  darkModeBtnDesktop.addEventListener("click", toggleDarkMode);
}

// Check the user's theme preference on page load
checkThemePreference();

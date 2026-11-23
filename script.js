// Small plain-JavaScript helpers for the profile page (no frameworks).

// ---- Dark-mode toggle (ODIN: Custom properties) -------------------------
// Switching data-theme on <html> makes style.css use the dark :root variables.
const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const label = toggle.querySelector(".theme-toggle__label");

function applyTheme(theme) {
  root.dataset.theme = theme;
  const dark = theme === "dark";
  toggle.setAttribute("aria-pressed", String(dark));
  toggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  label.textContent = dark ? "Light" : "Dark";
}

let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) { /* storage blocked */ }
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(saved || (prefersDark ? "dark" : "light"));

toggle.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("theme", next); } catch (e) { /* ignore */ }
});

// ---- Contact form (ODIN: Form validation) --------------------------------
// The browser's built-in validation (required, minlength, pattern, type=email)
// decides if the form is valid. Nothing is sent anywhere – this is a demo.
const form = document.getElementById("contactForm");
const status = form.querySelector(".form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.classList.add("was-checked");
  if (form.checkValidity()) {
    status.textContent = "Thanks! Everything looks valid. (Demo only – nothing was sent.)";
    status.className = "form-status is-ok";
    form.reset();
    form.classList.remove("was-checked");
  } else {
    status.textContent = "Please fix the highlighted fields.";
    status.className = "form-status is-error";
    form.querySelector(":invalid").focus();
  }
});

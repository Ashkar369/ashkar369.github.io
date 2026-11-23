// Ashkar Siyad – portfolio
// Small plain-JavaScript helpers: theme toggle, mobile menu, active nav link,
// Odin course tabs, copy email, and the contact form (opens the email app).

const root = document.documentElement;

/* ---------- Dark / light theme ---------- */
const themeBtn = document.querySelector(".theme-toggle");

function isDark() {
  if (root.dataset.theme) return root.dataset.theme === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function updateThemeLabel() {
  themeBtn.setAttribute("aria-label", isDark() ? "Switch to light mode" : "Switch to dark mode");
}
themeBtn.addEventListener("click", () => {
  const next = isDark() ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
  updateThemeLabel();
});
updateThemeLabel();

/* ---------- Mobile menu ---------- */
const navToggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});
nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

/* ---------- Highlight the nav link of the section on screen ---------- */
const navLinks = [...nav.querySelectorAll("a")];
const sections = navLinks.map((a) => document.querySelector(a.getAttribute("href")));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => s && observer.observe(s));
}

/* ---------- Odin course tabs (keyboard accessible) ---------- */
const tabs = [...document.querySelectorAll('[role="tab"]')];

function selectTab(tab, focus) {
  tabs.forEach((t) => {
    const selected = t === tab;
    t.setAttribute("aria-selected", String(selected));
    t.tabIndex = selected ? 0 : -1;
    document.getElementById(t.getAttribute("aria-controls")).hidden = !selected;
  });
  tab.scrollIntoView({ block: "nearest", inline: "nearest" }); // keeps the tab visible on phones
  if (focus) tab.focus();
}
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (e) => {
    let next = null;
    if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
    if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
    if (e.key === "Home") next = tabs[0];
    if (e.key === "End") next = tabs[tabs.length - 1];
    if (next) { e.preventDefault(); selectTab(next, true); }
  });
});

// Links like "#odin-js" (from the Class activities table) open the right tab
function openTabFromHash() {
  const panel = document.getElementById(location.hash.slice(1));
  if (panel && panel.getAttribute("role") === "tabpanel") {
    selectTab(document.querySelector(`[aria-controls="${panel.id}"]`));
    document.getElementById("odin").scrollIntoView();
  }
}
window.addEventListener("hashchange", openTabFromHash);
openTabFromHash();

/* ---------- Copy email ---------- */
const copyBtn = document.getElementById("copy-email");
copyBtn.addEventListener("click", async () => {
  const email = document.getElementById("email-text").textContent.trim();
  try {
    await navigator.clipboard.writeText(email);
    copyBtn.textContent = "Copied";
  } catch (e) {
    const range = document.createRange();
    range.selectNodeContents(document.getElementById("email-text"));
    const sel = getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    copyBtn.textContent = "Selected – press Ctrl+C";
  }
  setTimeout(() => (copyBtn.textContent = "Copy"), 2500);
});

/* ---------- Contact form: validate, then open the email app ---------- */
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");
const fields = ["cf-name", "cf-email", "cf-message"].map((id) => document.getElementById(id));

function checkField(input) {
  const ok = input.checkValidity();
  input.closest(".field").classList.toggle("is-invalid", !ok);
  input.setAttribute("aria-invalid", String(!ok));
  if (!ok) input.setAttribute("aria-describedby", input.id + "-error");
  else input.removeAttribute("aria-describedby");
  return ok;
}
fields.forEach((input) => input.addEventListener("blur", () => checkField(input)));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const allOk = fields.map(checkField).every(Boolean);
  if (!allOk) {
    statusEl.textContent = "Please fix the highlighted fields.";
    fields.find((f) => !f.checkValidity()).focus();
    return;
  }
  const data = new FormData(form);
  const subject = `${data.get("topic")} – message from ${data.get("name")}`;
  const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`;
  window.location.href = `mailto:ashkarsiyad7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  statusEl.textContent = "Your email app should open with the message ready. If it doesn't, copy the address above.";
});

# 11 – Custom Properties (CSS variables)

## What this lesson is about
Custom properties are **variables in CSS**: you save a value (like a colour) once under a name, and then use that name everywhere. Change it in one place → it changes everywhere.

## Key points
- **Declare** a custom property with two dashes: `--main-color: #2a7ae2;`
- **Use** it with `var()`: `color: var(--main-color);`
- **Fallback value**: `var(--accent, orange)` → uses orange if `--accent` doesn't exist.
- **Scope**: a custom property only works inside the element where it is declared and that element's children. Declare it on `:root` (the `<html>` element) to make it **global** – usable everywhere.
- Children can **override** a variable for themselves only.
- **Themes**: put a set of colour variables on `:root`, then a different set on a class like `.dark` (or inside a media query `@media (prefers-color-scheme: dark)`). Switching the class switches the whole theme.

## Code example
```css
:root {
  --bg: #ffffff;
  --text: #1d2330;
  --accent: #2a7ae2;
}
.dark {
  --bg: #121826;
  --text: #e8edf5;
}
body   { background: var(--bg); color: var(--text); }
button { background: var(--accent, orange); }
@media (prefers-color-scheme: dark) {
  :root { --bg: #121826; --text: #e8edf5; }
}
```

## Assignment I did
Watched the intro video and Kevin Powell's "Using CSS custom properties", read MDN "Using CSS custom properties" from "Inheritance of custom properties", and inspected the Odin website in DevTools to see their variables. `practice.html` has a light/dark theme switch built with custom properties, scope demos and fallbacks.

## Check yourself (my own questions – the lesson has no official Knowledge check)
1. **How do I declare and use a custom property?** Declare `--name: value;`, use it with `var(--name)`.
2. **What is a fallback value?** The second value in `var(--x, fallback)`, used if `--x` isn't defined.
3. **What does scope mean here?** A variable only works in the element where it's declared and its children.
4. **Why declare variables on `:root`?** So they are global and every element can use them.
5. **How can custom properties make a dark theme?** Store colours in variables, then redefine them in a `.dark` class or a `prefers-color-scheme: dark` media query.

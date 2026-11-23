# 05 – CSS Units

## What this lesson is about
When you set a size in CSS (width, font-size, margin…) you need a **unit**: `px`, `em`, `rem`, `%`, `vw`, `vh`… This lesson explains the difference and when to use which.

## Key points
- **Absolute units** always have the same size: mostly `px` (pixels). Others like `cm` or `in` are for printing.
- **Relative units** change depending on something else:
  - `em` – relative to the **font-size of the parent** (for `font-size`) or of the element itself (for other properties). Can "snowball" when nested.
  - `rem` – relative to the font-size of the **root `<html>`** (usually 16px). Easier to predict than `em`. 1rem = 16px by default.
  - `%` – a percentage of the parent's size.
  - `vw` / `vh` – 1% of the **viewport** (browser window) width / height. `100vh` = full screen height.
- **Good default rules:**
  - Use `rem` for **font sizes** – it respects the user's browser font-size setting (good for accessibility).
  - Use `px` for small things like **borders**.
  - Use `%`, `vw`, `vh` for things that should grow with the screen.

## Code example
```css
html { font-size: 100%; }       /* = 16px by default */
h1   { font-size: 2.5rem; }     /* 40px */
.box { width: 50%; padding: 1.5em; border: 2px solid; }
.hero { height: 60vh; }        /* 60% of the screen height */
```

## Assignment I did
Read MDN "CSS values and units", the CSS-Tricks-style article on em vs rem vs px, and "Fun with viewport units". `practice.html` shows em snowballing vs rem staying the same, and boxes sized with %, vw and vh.

## Check yourself (my own questions – the lesson has no official Knowledge check)
1. **Difference between absolute and relative units?** Absolute units (px) never change; relative units (em, rem, %, vw) depend on something else.
2. **Difference between `em` and `rem`?** `em` is based on the parent's font size (and can grow when nested); `rem` is always based on the root `<html>` font size.
3. **Which unit is best for font sizes and why?** `rem`, because it respects the user's font-size setting and doesn't snowball.
4. **What do `vw` and `vh` mean?** 1% of the viewport width and 1% of the viewport height.
5. **When is `px` fine?** For things that should not scale, like thin borders.

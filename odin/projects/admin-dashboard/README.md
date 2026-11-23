# Admin Dashboard – The Odin Project

**By Ashkar Siyad** · Web Technologies, RNU

## What is this project?
A copy of an **admin dashboard** design: the kind of page you see after logging into a website, with a menu on the left, a header with search and buttons, project cards, announcements and trending users. It is the final project of The Odin Project's *Intermediate HTML and CSS* course, and the goal is to build the layout mostly with **CSS Grid**.

Open `index.html` in a browser to see it.

## How I built it (following Odin's steps)
1. **Planning:** I studied the design and saw three big parts: a **sidebar**, a **header** and the **main content**.
2. **Layout:** I wrote the three containers in HTML first, then made the whole page one grid with `grid-template-areas`:
   ```css
   grid-template-areas:
     "sidebar header"
     "sidebar main";
   ```
3. **Nesting grids:** then I took one section at a time and made **grids inside grids**:
   - **Sidebar:** a grid for the logo + menu, and each menu link is a tiny 2-column grid (icon | text).
   - **Header:** a 2-column grid. Row 1 has the search bar and the user info; row 2 has the greeting and the New/Upload/Share buttons (a 3-column grid).
   - **Main:** a `3fr 1fr` grid → projects on the left, announcements and trending on the right.
   - **Project cards:** `repeat(auto-fit, minmax(300px, 1fr))`, so the number of columns changes with the window size. Each card is itself a grid (title / text / icons).
4. **Assets:**
   - Icons: **Material Design Icons** (Pictogrammers, free licence), saved as SVG files in `icons/`. They are black, so in the blue sidebar I turn them white with `filter: invert(1)`.
   - Avatars: simple cat-face SVG pictures I **drew myself** in code (`images/`), so there are no copyright problems.
   - Font: **Roboto** from Google Fonts, like in the design.
5. **Extra:** Odin says it doesn't have to be responsive, but I added two media queries: on tablets the right column moves under the projects, and on phones the sidebar becomes a menu at the top and everything stacks in one column.

## HTML and CSS concepts used
- **HTML:** semantic tags (`<aside>`, `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`), lists for menus, `<button>` with `aria-label` for icon-only buttons, `<input type="search">`, empty `alt=""` for decorative icons.
- **CSS Grid:** `grid-template-areas`, `grid-template-columns/rows`, `fr` units, `minmax()`, `repeat(auto-fit, …)`, `grid-auto-flow: column`, `gap`, `align-items`, nested grids.
- **Other CSS:** custom properties (`--blue`, `--yellow`, `--shadow`), `box-shadow`, `border-radius`, `border-left` for the yellow card stripe, `filter: invert()`, `position: relative` + `z-index` so the header's shadow sits on top, `:hover` effects, a small reset, Google Fonts, media queries.

## What I learned
- How to plan a page by splitting it into **big boxes first**, then filling in the details.
- That Grid can do **almost everything** in a layout – even small things like icon + text rows, which I would have done with Flexbox before.
- How powerful `grid-template-areas` is: I can "draw" the layout with words and change it for mobile by changing only a few lines.
- How `repeat(auto-fit, minmax(300px, 1fr))` makes cards responsive **without** any media query.
- How to use SVG icons and recolour them with CSS.

## Next step (to do myself)
Push this project to GitHub and publish it with **GitHub Pages**, as Odin suggests.

# Ashkar Siyad – Profile Website

A personal profile site built with **plain HTML and CSS** (plus a few lines of plain JavaScript for the dark-mode toggle and the demo form). It is a course assignment for **Web Technologies at Riga Nordic University (RNU)**, and it uses every concept from The Odin Project's **Intermediate HTML & CSS** course.

- **Live site:** https://ashkar369.github.io
- **Files:** `index.html`, `style.css`, `script.js`

Every concept is marked in the code with a comment that starts with `ODIN:`. To find them all, search for `ODIN:`.

## Where each Odin concept is used

| Odin lesson | What I did | Where (file:line) |
|---|---|---|
| **SVG** | Inline SVG logo (AS monogram), a camera avatar, and email/GitHub/LinkedIn icons | `index.html:27`, `index.html:66`, `index.html:295` |
| **Tables** | Skills table with `<caption>`, `<thead>`, `<tbody>`, `scope`, and zebra rows | `index.html:120`, `style.css:334` |
| **Default styles** | A small CSS reset (box-sizing, margins, list styles, form fonts) | `style.css:8` |
| **CSS units** | `rem` for type and spacing, `em` for padding, `vw` in `clamp()`, `%` for widths, `ch` for line length | `style.css:59`, `style.css:76` |
| **More text styles** | Google Fonts (Poppins + Inter), `letter-spacing`, `text-transform`, `text-shadow` | `index.html:9`, `style.css:69` |
| **More CSS properties** | Gradient `background`, `border-radius`, `box-shadow`, `opacity` | `style.css:221`, `style.css:237`, `style.css:425` |
| **Advanced selectors** | Child `>`, adjacent `+`, general sibling `~`, attribute `[type="email"]`, `[href^="mailto:"]`, `[data-level]`, `:hover`, `:nth-child()`, `::before` / `::after` | `style.css:183`, `:197`, `:291`, `:295`, `:334`, `:338`, `:439`, `:456`, `:499`, `:564` |
| **Positioning** | Sticky header, sticky sidebar, and an absolutely positioned "Open to internships" badge | `style.css:143`, `style.css:246`, `style.css:252`, `style.css:542` |
| **CSS functions** | `calc()`, `min()`, `max()`, `clamp()` | `style.css:38`, `:113`, `:510`, `:543` |
| **Custom properties** | `:root` colour theme plus a `[data-theme="dark"]` theme, switched by a button | `style.css:23`, `style.css:43`, `index.html:52`, `script.js:3` |
| **Browser compatibility** | `@supports` for the frosted-glass header; `-webkit-` vendor prefixes | `style.css:146`, `style.css:164` |
| **Frameworks & preprocessors** | See the note below on why I used plain CSS | this README |
| **Form basics** | `<fieldset>`/`<legend>`, `<label for>`, and the input types text, email, tel, select, textarea and checkbox | `index.html:230`, `index.html:236`, `style.css:479` |
| **Form validation** | `required`, `minlength`, `pattern`, `type="email"`, `:valid`/`:invalid` styling, and a JS `checkValidity()` message | `index.html:242`, `:256`, `style.css:517`, `script.js:28` |
| **Intro to Grid** | The whole page is a grid: header, content, sidebar and footer | `style.css:111` |
| **Creating a grid / grid-template-areas** | Named areas, which change to one column on mobile | `style.css:111`, `style.css:583` |
| **Positioning grid elements** | `grid-column: span 2` (featured card) and `grid-column: 1 / -1` (line numbers) | `style.css:408`, `style.css:417` |
| **Advanced grid properties** | `repeat()`, `auto-fit`, `minmax()` and `fr` | `style.css:112`, `style.css:363`, `style.css:387` |
| **Using Flexbox and Grid** | Grid for the page and the card layout, Flexbox for the nav, the hero, and inside each card | `style.css:144`, `:231`, `:370`, `:394` |
| **Project: Sign-up form** | The "Contact me" form | `index.html:230` |
| **Project: Admin dashboard** | The "My Projects" dashboard: stat tiles and a card grid | `index.html:173`, `style.css:357` |

## Frameworks and preprocessors: why plain CSS?

- **Bootstrap** and **Tailwind** are CSS frameworks. They give you ready-made classes such as `btn btn-primary` or `grid-cols-3`, which makes building fast, but the result looks like every other Bootstrap site. It also hides the CSS you are trying to learn.
- **Sass** is a preprocessor. You write `.scss` files with variables, nesting and mixins, and a build step turns them into normal CSS.
- For this assignment I used **plain CSS** on purpose:
  1. The goal is to show that I understand Grid, Flexbox, selectors and custom properties myself.
  2. Modern CSS already does most of what Sass was used for. Custom properties (`--accent`) replace Sass variables, `clamp()`/`min()`/`max()` replace many mixins, and nesting is coming to plain CSS.
  3. There's no build step, so GitHub Pages serves the files exactly as written.

## Accessibility and responsiveness

- Semantic tags: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`.
- A skip link, visible `:focus-visible` outlines, `aria-label`/`aria-pressed` on the theme toggle, `<title>` inside meaningful SVGs, and `aria-hidden` on decorative icons.
- Colours were chosen for good contrast in both light and dark themes.
- The layout goes from two columns to one column below 52rem, the nav becomes a swipeable row on phones, and `prefers-reduced-motion` is respected.

## Run locally

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

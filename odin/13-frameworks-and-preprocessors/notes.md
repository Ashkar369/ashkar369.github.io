# 13 – Frameworks and Preprocessors

## What this lesson is about
Tools that sit on top of normal CSS to help you write it faster: **CSS frameworks** (ready-made styles) and **preprocessors** (CSS with extra powers that is turned into normal CSS).

## Key points
### Frameworks
- A **framework** is a big package of ready-made CSS. You add class names in your HTML and get styled buttons, grids, cards, etc.
- Examples: **Bootstrap** (ready-made components like `.btn .btn-primary`) and **Tailwind CSS** (small "utility" classes like `p-4 bg-blue-500 rounded`).
- **Good:** fast to build, consistent look, responsive grid included.
- **Bad:** many websites end up looking the same; it can be hard to change the design; lots of classes in your HTML; extra code to download; and you **still need to know real CSS** to fix problems. That's why Odin teaches plain CSS first.

### Preprocessors
- A **preprocessor** lets you write CSS with extra features, then a tool **compiles** it into normal CSS that the browser understands.
- Examples: **Sass/SCSS** (most popular), **Less**, **Stylus**.
- Extra features: variables, **nesting**, mixins (reusable groups of styles), functions, splitting into many files.
- **Downsides:** an extra build step, more to learn, and harder debugging. Today plain CSS also has **variables (custom properties)** and **nesting**, so you need preprocessors less.

## Code example
SCSS (preprocessor):
```scss
$accent: #2a7ae2;
.card {
  padding: 1rem;
  h2 { color: $accent; }   // nesting
}
```
Same thing in modern plain CSS:
```css
:root { --accent: #2a7ae2; }
.card {
  padding: 1rem;
  & h2 { color: var(--accent); }  /* native CSS nesting */
}
```

## Assignment I did
Read the overview of CSS frameworks, skimmed the Sass/Less/Stylus overview, and read about the disadvantages of preprocessors. `practice.html` shows the same card made with plain CSS (with native nesting and variables) and with Bootstrap classes, so I can compare.

## Check yourself (my own questions – the lesson has no official Knowledge check)
1. **What is a CSS framework?** A ready-made set of CSS classes you add to your HTML to style it quickly.
2. **Name two frameworks.** Bootstrap and Tailwind CSS.
3. **What is a preprocessor?** A tool that lets you write CSS with extra features (variables, nesting, mixins) and turns it into normal CSS.
4. **Name two preprocessors.** Sass (SCSS) and Less (also Stylus).
5. **Why learn plain CSS first?** Because frameworks are built on CSS, and you need CSS to customise them and fix problems.

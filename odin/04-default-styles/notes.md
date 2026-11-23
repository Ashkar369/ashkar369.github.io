# 04 – Default Styles

## What this lesson is about
Even if you write **no CSS at all**, a page still has some style: headings are big and bold, links are blue and underlined, the body has a small margin. These come from the **browser's own stylesheet** ("user-agent stylesheet"). This lesson is about those defaults and how to control them with a **CSS reset**.

## Key points
- Every browser (Chrome, Firefox, Safari) has its **own default styles**, and they are a little bit different. So the same page can look slightly different in each browser.
- You can see the defaults in DevTools: they are marked "user agent stylesheet".
- **CSS reset** = a small CSS file you put first, to remove or even out the defaults.
  - A **hard reset** removes almost everything (all margins, padding, list bullets…) so you start from zero.
  - **Normalize.css** keeps useful defaults but makes all browsers behave the same.
  - **Opinionated resets** (like Josh Comeau's) choose sensible modern defaults, e.g. `box-sizing: border-box` for everything and images that never overflow.
- You don't always need a reset. Many people use a small, simple one in every project.

## Code example – a small modern reset (my own version based on the ideas in the lesson)
```css
*, *::before, *::after { box-sizing: border-box; }
* { margin: 0; }
body { line-height: 1.5; }
img, picture, svg, video { display: block; max-width: 100%; }
input, button, textarea, select { font: inherit; }
```

## Assignment I did
Read the articles about resets (Reboot, Resets and Reasoning; Normalize vs reset in 2023; Josh Comeau's custom reset). `practice.html` shows the same content twice: once with browser defaults and once with my small reset, side by side.

## Check yourself (my own questions – the lesson has no official Knowledge check)
1. **Where do default styles come from?** From the browser's built-in stylesheet (the user-agent stylesheet).
2. **Why can a page look different in different browsers?** Because each browser has slightly different default styles.
3. **What is a CSS reset?** A small stylesheet that removes or evens out the browser defaults so you start from a known point.
4. **Difference between a hard reset and normalize?** A hard reset removes almost all styles; normalize keeps the useful defaults but makes browsers consistent.
5. **Why is `box-sizing: border-box` popular in resets?** Because then padding and border are included in the width, which makes sizes easier to calculate.

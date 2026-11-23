# 08 – Advanced Selectors

## What this lesson is about
More powerful ways to choose (select) which HTML elements your CSS should style – by their family relationship, their state, their position, special parts of them, or their attributes.

## Key points
### Child and sibling combinators
- `div p` (space) – any `<p>` **inside** a div, at any depth (descendant).
- `div > p` – only `<p>` that are **direct children** of a div.
- `h2 + p` – the `<p>` **right after** an h2 (adjacent sibling).
- `h2 ~ p` – **all** `<p>` siblings that come after an h2 (general sibling).

### Pseudo-classes (one colon `:`) – select by **state or position**
- States: `:hover`, `:focus`, `:active`, `:visited`, `:checked`, `:disabled`.
- Position: `:first-child`, `:last-child`, `:nth-child(2)`, `:nth-child(odd)`, `:nth-child(3n)`, `:only-child`.
- Others: `:root` (the `<html>` element), `:empty`, `:not(.x)`, `:is()`, `:where()`.

### Pseudo-elements (two colons `::`) – style a **part** of an element
- `::first-letter`, `::first-line`, `::selection` (highlighted text), `::marker` (list bullets).
- `::before` and `::after` – add decorative content with the `content` property.

### Attribute selectors
- `[type]` – has the attribute. `[type="email"]` – exact value.
- `[href^="https"]` – starts with. `[href$=".pdf"]` – ends with. `[class*="btn"]` – contains.

## Code example
```css
ul > li:nth-child(odd) { background: #f1f5fa; }
a[href$=".pdf"]::after { content: " (PDF)"; }
h2 + p::first-letter { font-size: 2em; }
input:focus { outline: 3px solid #2a7ae2; }
```

## Assignment I did
- Read Shay Howe's "Complex Selectors" (remember: `::` is the modern way for pseudo-elements).
- CSS Diner and the MDN Selectors assessment are interactive games/tests in the browser – I need to play them myself on the websites (see SUMMARY.md "what's left").
- `practice.html` uses every type of selector from the lesson.

## Check yourself (my own questions – the lesson has no official Knowledge check)
1. **Difference between `div p` and `div > p`?** `div p` selects any p inside the div (any depth); `div > p` only direct children.
2. **What does `h2 + p` select?** The one `<p>` that comes straight after an `<h2>`.
3. **Pseudo-class vs pseudo-element?** A pseudo-class (`:hover`) selects an element in a certain state/position; a pseudo-element (`::before`) styles a part of an element or adds content.
4. **How do I style every second list item?** `li:nth-child(even)` (or `odd`).
5. **How do I select all links that end in `.pdf`?** `a[href$=".pdf"]`.

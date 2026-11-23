# 02 – SVG

## What this lesson is about
SVG means **Scalable Vector Graphics**. It is a kind of picture that is written as code (shapes and lines), not as a grid of coloured dots (pixels). Because it is maths, it stays **perfectly sharp at any size**.

## Key points
- **Vector vs raster:** a JPG/PNG is made of pixels (raster) and gets blurry when you zoom. An SVG is made of shapes described with numbers (vector), so it never gets blurry.
- SVG is written in **XML**, which looks a lot like HTML: tags with attributes.
- Good for: **icons, logos, simple illustrations, charts**. Not good for: **photos** (too many details → huge file).
- Files are small and you can change colours with CSS or animate them.
- **Anatomy of an SVG:**
  - `xmlns` – tells the browser this is SVG (needed in a separate .svg file).
  - `viewBox="0 0 100 100"` – the "drawing area" coordinates: x, y, width, height. Everything is drawn inside it, then scaled to the real size.
  - Shapes: `<circle>`, `<rect>`, `<line>`, `<polyline>`, `<polygon>`, `<path>`, `<text>`.
  - `fill` = inside colour, `stroke` = outline colour, `stroke-width` = outline thickness.
- **Ways to put SVG on a page:**
  1. Inline – write `<svg>…</svg>` straight in the HTML (you can style it with CSS and JS).
  2. As an image – `<img src="logo.svg" alt="…">` (simple, but you can't style the inside with CSS).
  3. As a CSS background image.

## Code example
```html
<svg width="120" height="120" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" fill="gold" stroke="black" stroke-width="3" />
</svg>
```
`cx`/`cy` = centre of the circle, `r` = radius.

## Assignment I did
Read Josh Comeau's "A Friendly Introduction to SVG" (up to animations) and practised shapes, `viewBox` and scaling in `practice.html`.

## Check yourself (my own questions – the lesson has no official Knowledge check)
1. **What is the difference between SVG and a JPG?** SVG is drawn with shapes and stays sharp at any size. JPG is made of pixels and gets blurry when made bigger.
2. **When should I NOT use SVG?** For photos and very detailed pictures – the file would be huge and slow.
3. **What does `viewBox` do?** It sets the internal coordinate system of the drawing, so the picture can be scaled up or down without changing the numbers inside.
4. **What is the difference between `fill` and `stroke`?** `fill` colours the inside of a shape, `stroke` colours its outline.
5. **Name two ways to add an SVG to a page.** Inline `<svg>` code, or `<img src="file.svg">`.

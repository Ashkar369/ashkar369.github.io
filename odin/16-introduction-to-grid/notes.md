# 16 – Introduction to Grid

## What this lesson is about
A first look at **CSS Grid**, a layout tool, and how it compares to **Flexbox**, which I already know.

## Key points
- **Flexbox is one-dimensional:** it lays items out in **one direction** – a row *or* a column. Items can wrap onto new lines, but each line works on its own, so the items don't line up into neat columns.
- **Grid is two-dimensional:** it controls **rows and columns at the same time**, like a table or a spreadsheet. Items line up both across and down.
- Both are great; they are not enemies. Flexbox is great for small pieces (a navbar, a row of buttons); Grid is great for whole page layouts and anything that needs straight rows **and** columns (a photo gallery, a dashboard).
- Example from the lesson: with Flexbox and `flex-wrap`, a last row with fewer items stretches to fill the space; with Grid, the items stay in their columns.

## Code example
```css
/* Flexbox: one direction */
.flex { display: flex; flex-wrap: wrap; gap: 10px; }
.flex > div { flex: 1 1 150px; }

/* Grid: rows AND columns */
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
```

## Assignment
The lesson says: "Surprise! No assignment!" – the next lessons go deeper. My `practice.html` shows the same 7 boxes laid out with Flexbox and with Grid, so you can see the difference in the last row.

## Check yourself (my own questions – the lesson has no official Knowledge check)
1. **Main difference between Flexbox and Grid?** Flexbox works in one direction (row or column); Grid works in two (rows and columns together).
2. **When would I choose Grid over Flexbox?** When items must line up in both rows and columns, like a gallery or a full page layout.
3. **When is Flexbox the better choice?** For a single row or column of things, like a navbar or a group of buttons.
4. **Can I use both on the same page?** Yes – very often Grid for the big layout and Flexbox inside the pieces.

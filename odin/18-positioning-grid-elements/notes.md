# 18 – Positioning Grid Elements

## What this lesson is about
How to place grid items exactly where you want them – across several columns or rows – using the **grid lines**.

## Key points
- **Tracks** = the rows and columns. **Lines** = the lines between and around the tracks. **Cells** = one box where a row and a column cross. An **area** = a rectangle of several cells.
- Lines are **numbered from 1**. A grid with 3 columns has 4 column lines. Negative numbers count from the end: `-1` is the last line.
- Place an item with start and end lines:
  - `grid-column-start: 1; grid-column-end: 3;` → covers columns 1 and 2.
  - Shorthand: `grid-column: 1 / 3;` and `grid-row: 2 / 4;`
  - `span`: `grid-column: span 2;` → "be 2 columns wide".
  - `grid-column: 1 / -1;` → full width.
- **`grid-area`** shorthand: `grid-area: row-start / column-start / row-end / column-end;` e.g. `grid-area: 1 / 1 / 3 / 3;`.
- **Named areas** – draw the layout with words:
  ```css
  .container {
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
  }
  .header { grid-area: header; }
  ```
  A `.` means an empty cell.

## Code example
```css
.container { display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 80px); }
.big   { grid-column: 1 / 3; grid-row: 1 / 3; }  /* 2x2 square */
.wide  { grid-column: 3 / -1; }                  /* to the end */
.tall  { grid-row: span 2; }
```

## Assignment I did
- Read MDN "Line-based placement with CSS Grid".
- CSS Grid Garden levels 1–17 are an online game – I need to play them myself in the browser (see SUMMARY.md "what's left").
- **css-exercises: `exercises/01-basic-holy-grail/`** – done. The grid has 2 columns (150px and 450px, so the 2nd is 3× bigger), 4 rows (100/100/500/100px, so the 3rd is 5× bigger), a 15px gap, header and footer across both columns, sidebar in column 1, nav and article in column 2. Open its `index.html` and compare with `desired-outcome.png`.
- `practice.html` shows line numbers, `span`, negative lines, `grid-area` and named areas.

## Check yourself (my own questions – the lesson has no official Knowledge check)
1. **Difference between tracks, lines and cells?** Tracks are rows/columns, lines are the borders between them, a cell is one box where a row and column meet.
2. **How many column lines does a 3-column grid have?** Four.
3. **What does `grid-column: 1 / 3` mean?** Start at column line 1 and end at line 3 – so the item covers 2 columns.
4. **What does `grid-column: 1 / -1` do?** Makes the item stretch to the last line – full width.
5. **What does `span 2` do?** Makes the item 2 tracks big without saying exact line numbers.
6. **What is `grid-template-areas` good for?** Naming parts of the layout and drawing it with words, which is easy to read and change.

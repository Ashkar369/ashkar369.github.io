# 17 – Creating a Grid

## What this lesson is about
How to turn an element into a grid, how to make columns and rows (called **tracks**), the difference between the **explicit** and **implicit** grid, and how to add space between cells with **gap**.

## Key points
- `display: grid;` on a parent makes it a **grid container**. Its **direct children** become **grid items** (grandchildren are not).
- **Tracks** = columns and rows.
  - `grid-template-columns: 100px 200px 100px;` → three columns.
  - `grid-template-rows: 50px 50px;` → two rows.
  - Shorthand: `grid-template: 50px 50px / 100px 200px 100px;` (rows / columns).
- **Explicit grid** = the tracks you define yourself with `grid-template-…`.
- **Implicit grid** = extra rows (or columns) the browser **creates automatically** when there are more items than cells. Size them with `grid-auto-rows` / `grid-auto-columns`. `grid-auto-flow: column` makes new items go into new columns instead of rows.
- **Gap**: `column-gap`, `row-gap`, or the shorthand `gap: 10px;` (or `gap: 10px 20px;` = row gap, column gap).
- **DevTools:** Chrome and Firefox have a grid inspector – click the "grid" badge next to the element to see the lines and track numbers.

## Code example
```css
.container {
  display: grid;
  grid-template-columns: 120px 120px 120px;
  grid-template-rows: 60px 60px;
  grid-auto-rows: 40px;   /* size of rows the browser adds by itself */
  gap: 10px;
}
```

## Assignment I did
Read the "Introduction" and "Key Terms" of the CSS-Tricks Grid guide, watched the Wes Bos video on implicit vs explicit tracks, and read the Chrome DevTools docs on inspecting grid. `practice.html` shows an explicit grid, extra items that create implicit rows (different colour), and gaps.

## Check yourself (my own questions – the lesson has no official Knowledge check)
1. **How do I make a grid container?** `display: grid;` on the parent.
2. **Which elements become grid items?** Only the direct children of the container.
3. **What are tracks?** The rows and columns of the grid.
4. **Explicit vs implicit grid?** Explicit = tracks I define with `grid-template-*`; implicit = tracks the browser adds automatically for extra items.
5. **How do I control the size of implicit rows?** With `grid-auto-rows`.
6. **How do I add space between cells?** With `gap` (or `row-gap` / `column-gap`).

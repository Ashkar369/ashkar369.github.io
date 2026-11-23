# 19 – Advanced Grid Properties

## What this lesson is about
Tools that make grids **shorter to write** and **responsive** (they adapt to the screen size by themselves): `repeat()`, the `fr` unit, `min()`/`max()`, `minmax()`, `clamp()`, and `auto-fit` / `auto-fill`.

## Key points
- **`repeat()`** – write `repeat(4, 100px)` instead of `100px 100px 100px 100px`. Also works with patterns: `repeat(2, 1fr 2fr)`.
- **`fr` (fraction)** – shares the **free space**. `1fr 2fr` = the second column gets twice as much of the leftover space. Better than `%` because it counts the gaps automatically.
- **`min()` / `max()`** inside track sizes, e.g. `grid-template-columns: repeat(3, min(200px, 30%))`.
- **`minmax(min, max)`** – a track can't be smaller than `min` or bigger than `max`: `minmax(150px, 1fr)`. Only works for grid tracks.
- **`clamp(min, ideal, max)`** – also usable for track sizes.
- **`auto-fill` / `auto-fit`** – let the browser decide **how many columns** fit:
  - `repeat(auto-fit, minmax(200px, 1fr))` → as many 200px+ columns as fit, stretched to fill the row. This is the famous **responsive grid without media queries**.
  - Difference: **auto-fill** keeps empty "ghost" columns when there are few items; **auto-fit** collapses them so the items stretch to fill the row.
- **Subgrid** (`grid-template-columns: subgrid`) lets a child grid use the parent's tracks, so things inside cards line up across cards.

## Code example
```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
.layout { display: grid; grid-template-columns: minmax(150px, 1fr) 3fr; }
```

## Assignment I did
- Read "CSS Grid Properties", "Special Units, Values & Functions" and "Subgrid" in the CSS-Tricks Grid guide.
- CSS Grid Garden levels 18–28 are an online game – I need to play them myself (see SUMMARY.md "what's left").
- **css-exercises:**
  - `exercises/01-responsive-holy-grail/` – done: same layout as lesson 18, but with `1fr 3fr` columns and `1fr 1fr 5fr 1fr` rows (no pixels), so it shrinks and grows with the window and row 3 gets taller when the text wraps.
  - `exercises/02-holy-grail-mockup/` – done: the whole mockup with **only Grid** – a 1fr/4fr container with a 4px gap, a grid header and menu, a nav with a 3-column grid, a sidebar with a 50px gap and text centred with grid, and article cards using `repeat(auto-fit, minmax(250px, 1fr))` with a 15px gap and 200px-high cards.
- `practice.html` compares auto-fill vs auto-fit and shows `repeat`, `fr` and `minmax`.

## Check yourself (my own questions – the lesson has no official Knowledge check)
1. **What does `repeat(3, 1fr)` mean?** Three columns that each get an equal share of the space.
2. **What is the `fr` unit?** A fraction of the free space left in the grid container.
3. **What does `minmax(200px, 1fr)` do?** The track is at least 200px but can grow to take a share of the free space.
4. **How do I make a responsive grid without media queries?** `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`.
5. **Difference between auto-fill and auto-fit?** auto-fill keeps empty columns; auto-fit collapses them so the items stretch.

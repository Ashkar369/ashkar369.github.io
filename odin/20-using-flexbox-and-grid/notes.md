# 20 – Using Flexbox and Grid

## What this lesson is about
When to use **Flexbox**, when to use **Grid**, and how to use them **together**.

## Key points
- **Content first vs layout first:**
  - **Flexbox is "content first"** – you have some items and you let them decide their size; Flexbox arranges them in a row or column and they can wrap.
  - **Grid is "layout first"** – you first draw the structure (columns and rows), then put the items into it.
- **Use Flexbox when:** you have one line of things (a navbar, buttons, a card's footer with icons), you want items to size themselves by their content, or you need simple centring.
- **Use Grid when:** you need rows **and** columns to line up (a page layout, a gallery, a dashboard), or you want to place items in exact spots.
- **Combine them:** it is very normal to use Grid for the big page layout and Flexbox **inside** the grid items (e.g. a grid of cards, and inside each card a flex row of icons). A grid item can also be a flex container, and the other way around.
- **Closing opinion from the lesson:** there's no strict rule – both can often do the same job. Pick the one that makes your code simplest, and it's fine to change your mind.

## Code example
```css
/* Grid for the page */
.page  { display: grid; grid-template-columns: 220px 1fr; }
/* Grid for the cards */
.cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; }
/* Flexbox inside each card */
.card-actions { display: flex; justify-content: flex-end; gap: .5rem; }
```

## Assignment I did
Read "CSS Grid does not replace Flexbox", watched Kevin Powell's video on real-world Grid vs Flexbox use cases, and read when to use Grid or Flexbox and why. `practice.html` is a small layout: Grid for the page and the cards, Flexbox for the navbar and the card buttons.

## Check yourself (my own questions – the lesson has no official Knowledge check)
1. **What does "content first" mean for Flexbox?** The items' content decides their size, and Flexbox arranges them.
2. **What does "layout first" mean for Grid?** You define the rows and columns first, then place the items into them.
3. **Give an example where Flexbox is better.** A navigation bar or a row of buttons.
4. **Give an example where Grid is better.** A photo gallery or a full page/dashboard layout.
5. **Can a grid item also be a flex container?** Yes – combining them is very common.

# 10 – CSS Functions

## What this lesson is about
CSS has **functions**, like small helpers that calculate a value for you. You have already used some (`rgb()`, `url()`, `linear-gradient()`). This lesson teaches four very handy ones: `calc()`, `min()`, `max()` and `clamp()`.

## Key points
- A function looks like `name(arguments)`, e.g. `rgb(255, 0, 0)`. The arguments go inside the brackets.
- **`calc()`** – does maths and can **mix units**: `width: calc(100% - 200px);`. Spaces around `+` and `-` are required.
- **`min()`** – picks the **smallest** value from a list: `width: min(100%, 600px);` → never wider than 600px, but shrinks on small screens.
- **`max()`** – picks the **largest** value: `font-size: max(1rem, 2vw);` → never smaller than 1rem.
- **`clamp(MIN, IDEAL, MAX)`** – keeps a value between a minimum and a maximum, using the ideal value in between: `font-size: clamp(1.5rem, 4vw, 3rem);`. Great for headings that grow with the screen but never get silly.
- These functions help make **responsive** designs with less code (often without media queries).

## Code example
```css
.content { width: calc(100% - 2rem); }
.card    { width: min(90%, 500px); }
p        { font-size: max(1rem, 1.2vw); }
h1       { font-size: clamp(1.8rem, 5vw, 3.5rem); }
```

## Assignment I did
Looked at MDN's full list of CSS functions and the article showing min, max and clamp in action. `practice.html` uses all four – resize the browser window to see them change.

## Check yourself (my own questions – the lesson has no official Knowledge check)
1. **What makes `calc()` special?** It can do maths with different units together, like `100% - 50px`.
2. **What does `min(100%, 600px)` give?** The smaller of the two – so the element is full width on small screens but never wider than 600px.
3. **What are the three values in `clamp()`?** Minimum, preferred (ideal) value, maximum.
4. **Name three CSS functions you already knew before this lesson.** `rgb()`, `url()`, `linear-gradient()`.
5. **Why are these functions useful for responsive design?** Sizes adjust to the screen automatically, so you need fewer media queries.

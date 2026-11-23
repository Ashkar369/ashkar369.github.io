# 07 – More CSS Properties

## What this lesson is about
A tour of very useful CSS properties that you will use all the time: background, border, border-radius, box-shadow, overflow and opacity.

## Key points
- **`background`** – a shorthand for 8 background properties. It can set a colour, an image, a gradient, where the image sits (`background-position`), its size (`background-size: cover`) and whether it repeats (`background-repeat`).
- **`border`** – `border: 2px solid red;` = width, style, colour. You can also do only one side: `border-left`.
- **`border-radius`** – rounds the corners. `50%` on a square makes a circle.
- **`box-shadow`** – a shadow around a box: `box-shadow: x y blur spread colour;` e.g. `0 4px 10px rgba(0,0,0,.2)`.
- **`overflow`** – what happens when the content is bigger than its box: `visible` (spills out), `hidden` (cut off), `scroll` / `auto` (scrollbars).
- **`opacity`** – how see-through an element is, from `0` (invisible) to `1` (solid). It affects the element **and everything inside it**.

## Code example
```css
.card {
  background: linear-gradient(135deg, #2a7ae2, #6a11cb);
  border: 2px solid #1f3a5f;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}
.small-box { height: 80px; overflow: auto; }
.faded { opacity: 0.4; }
```

## Assignment I did
Read the MDN docs for background, border, border-radius, box-shadow, overflow and opacity. `practice.html` has one small demo box for each property.

## Check yourself (my own questions – the lesson has no official Knowledge check)
1. **How do I make a picture fill a whole box as a background?** `background-image: url(...); background-size: cover;`.
2. **How do I make a circle with CSS?** Give a square element `border-radius: 50%`.
3. **What do the numbers in `box-shadow: 0 4px 10px` mean?** Horizontal offset, vertical offset, blur.
4. **What does `overflow: auto` do?** It shows scrollbars only when the content doesn't fit.
5. **What's the difference between `opacity: .5` and a colour with transparency like `rgba(0,0,0,.5)`?** `opacity` fades the whole element including its text; rgba only makes that one colour see-through.

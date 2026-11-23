# 09 – Positioning

## What this lesson is about
The `position` property lets you move an element away from where it would normally be, or stick it to the screen. There are five values: `static`, `relative`, `absolute`, `fixed` and `sticky`.

## Key points
- **`static`** (default) – the element is in the normal flow. `top/left/right/bottom` do nothing.
- **`relative`** – stays in the normal flow, but you can nudge it with `top/left…` from where it would normally be. Its old space is kept. Very often used as the **"anchor" for absolute children**.
- **`absolute`** – taken **out of the normal flow** (other elements act like it isn't there). It is placed relative to the **nearest parent that has a position** other than static. Great for badges, icons on top of pictures, little pop-ups.
- **`fixed`** – out of the flow and stuck to the **viewport** (screen). It stays in place when you scroll. Used for fixed headers, "back to top" buttons, chat buttons.
- **`sticky`** – acts normal until you scroll to a point (e.g. `top: 0`), then it sticks like fixed – but only **inside its parent**.
- `z-index` decides which positioned element is on top when they overlap (bigger number = on top).

## Code example
```css
.card  { position: relative; }
.badge { position: absolute; top: 8px; right: 8px; }
.chat  { position: fixed; bottom: 16px; right: 16px; }
.table-header { position: sticky; top: 0; }
```

## Assignment I did
Watched Web Dev Simplified's "Learn CSS Position", read MDN's `position` docs, the CSS-Tricks article on absolute/relative/fixed, and Kevin Powell's fixed vs sticky article. `practice.html` shows all five values (scroll the page to see fixed and sticky).

## Check yourself (my own questions – the lesson has no official Knowledge check)
1. **What is the default position?** `static`.
2. **What is an absolutely positioned element placed relative to?** The closest ancestor with a position other than `static` (or the page if there is none).
3. **Difference between `fixed` and `sticky`?** Fixed is always stuck to the screen; sticky scrolls normally until it reaches its offset, then sticks – only while its parent is visible.
4. **Why do we often put `position: relative` on a parent?** So that its absolute children are positioned inside it.
5. **What does `z-index` do?** It controls which positioned element appears on top when they overlap.

# 14 – Form Basics

## What this lesson is about
Forms are how websites **collect information** from people: sign-up, login, search, contact, checkout. This lesson covers the HTML for forms and a bit about styling them.

## Key points
### The form element
- `<form action="/signup" method="post">` – `action` = where the data is sent, `method` = how (`get` puts it in the address bar, `post` sends it hidden in the request – use post for passwords and private data).

### Form controls
- `<label for="email">` + `<input id="email">` – always connect a label to its input (click the label → the input gets focus; screen readers read it).
- `name="email"` – the name the data is sent with. Without `name`, the value is not sent.
- `<input type="…">`: `text`, `email`, `password`, `number`, `date`, `tel`, `checkbox`, `radio`, `file`, `color`, `range`, `search`…
- `placeholder` = grey example text (not a replacement for a label). `value` = a starting value.
- `<textarea>` – multi-line text.
- **Selection elements:** `<select>` with `<option>` (dropdown), grouped with `<optgroup>`; **radio buttons** (choose one – same `name`); **checkboxes** (choose many).
- **Buttons:** `<button type="submit">` (sends the form – the default!), `type="reset"` (clears it), `type="button"` (does nothing unless JavaScript).
- **Organising:** `<fieldset>` draws a box around related fields, `<legend>` is its title.

### Styling forms
- Form controls have strong default styles that differ between browsers. Add `font: inherit` so they use your page font.
- Checkboxes, radios and selects are harder to style; `accent-color` helps, and `appearance: none` removes the default look so you can design your own.

## Code example
```html
<form action="#" method="post">
  <label for="name">Name</label>
  <input id="name" name="name" type="text" placeholder="Thor">
  <fieldset>
    <legend>Plan</legend>
    <label><input type="radio" name="plan" value="free" checked> Free</label>
    <label><input type="radio" name="plan" value="pro"> Pro</label>
  </fieldset>
  <button type="submit">Sign up</button>
</form>
```

## Assignment I did
Read and coded along with MDN's form introductory tutorials, the "different form controls" guides, the three form styling tutorials (styling web forms, advanced form styling, UI pseudo-classes) and the "Interneting Is Hard" forms tutorial. `practice.html` is a styled "student registration" form that uses every control from the lesson.

## Check yourself (my own questions – the lesson has no official Knowledge check)
1. **What do `action` and `method` on a form do?** `action` = where the data goes; `method` = how it is sent (get or post).
2. **Why is the `name` attribute important?** Without it the input's value is not sent with the form.
3. **How do I connect a label to an input?** Give the input an `id` and the label `for="that-id"` (or put the input inside the label).
4. **Radio buttons vs checkboxes?** Radios: choose only one (they share a `name`). Checkboxes: choose any number.
5. **What is the default type of a `<button>` inside a form?** `submit`.
6. **What are `<fieldset>` and `<legend>` for?** Grouping related fields with a box and a title.

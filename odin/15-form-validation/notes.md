# 15 – Form Validation

## What this lesson is about
**Validation** means checking that what people type into a form is correct **before** it is sent – for example that an email looks like an email, or that a field isn't empty. HTML can do a lot of this by itself, without JavaScript.

## Key points
- **Client-side validation** (in the browser) gives quick feedback. It does **not** replace checks on the server – people can get around browser checks.
- **Built-in HTML validations:**
  - `required` – the field can't be empty.
  - `minlength` / `maxlength` – minimum and maximum number of characters for text.
  - `min` / `max` (and `step`) – smallest and biggest number or date.
  - `type="email"`, `type="url"`, `type="number"` – the browser checks the format.
  - `pattern="[A-Za-z]{3,}"` – a **regular expression** the value must match (good for postcodes, phone numbers…). Add a `title` to explain the rule.
- The browser shows its own error message bubble when you try to submit.
- **Styling validation with CSS:**
  - `:valid` / `:invalid` – match right away (even before typing, which can feel rude).
  - `:user-valid` / `:user-invalid` – only after the user has interacted with the field → friendlier. 
  - `:required` / `:optional`, `:in-range` / `:out-of-range`, `:placeholder-shown`.
- **Good UX tips:** show the rules up front, show errors next to the field, don't show errors before the user has typed, keep messages short and helpful.

## Code example
```html
<label for="user">Username (3–15 letters)</label>
<input id="user" name="user" required minlength="3" maxlength="15"
       pattern="[A-Za-z]+" title="Only letters A–Z">

<label for="age">Age</label>
<input id="age" name="age" type="number" min="16" max="99" required>
```
```css
input:user-invalid { border-color: #c0392b; }
input:user-valid   { border-color: seagreen; }
```

## Assignment I did
Read and followed MDN's Client-side form validation guide (without the JavaScript part), SitePoint's guide to HTML forms and constraint validation (without the JS parts), and the do's and don'ts thread for form validation UX. `practice.html` is a form that uses every built-in validation and styles errors with `:user-invalid`.

## Check yourself (my own questions – the lesson has no official Knowledge check)
1. **What is form validation?** Checking that the form data is correct before it is sent.
2. **Why do we still need server-side validation?** Browser checks can be skipped or switched off, so the server must check again for safety.
3. **Which attribute makes a field compulsory?** `required`.
4. **How do I limit the length of a text?** `minlength` and `maxlength`.
5. **What does `pattern` do?** It forces the value to match a regular expression.
6. **Why is `:user-invalid` nicer than `:invalid`?** It only shows the error after the person has interacted with the field, not as soon as the page loads.

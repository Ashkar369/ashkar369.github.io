# Sign-up Form – The Odin Project

**By Ashkar Siyad** · Web Technologies, RNU

## What is this project?
A sign-up page for an imaginary online service called **ODIN**. It is the first project of The Odin Project's *Intermediate HTML and CSS* course, and its goal is to practise **forms**, **form validation** and **layout** by copying a design as closely as possible.

Open `index.html` in a browser to see it.

## How I built it
1. **Planning:** I looked at the design picture and split the page into two big columns: the photo on the left, and the text and form on the right.
2. **HTML first:** I wrote the structure with simple, meaningful tags: `<aside>` for the photo side, `<main>` with three `<section>`s (intro text, form, button), and a `<form>` with six `<label>` + `<input>` pairs.
3. **Layout with CSS Grid:** the whole page is a 2-column grid (about 37% / 63%). The six inputs sit in another small 2-column grid.
4. **Details from the design:**
   - The dark band behind the "ODIN" logo is a semi-transparent background (`rgba(0,0,0,.5)`), so the white text stays readable over the busy photo.
   - The button colour is `#596D48`, as the project asks.
   - Inputs have a light `#E5E7EB` border, a **blue border and soft shadow when selected** (`:focus`), and a **red border when the value is wrong** (`:user-invalid`) – e.g. a password shorter than 8 characters.
   - The "Create Account" button sits outside the form in the design, so I connected it with the `form="signup"` attribute.
5. **Assets:**
   - Background photo: *Polystichum munitum* (sword fern) by **Timothy McNitt**, from Wikimedia Commons, licence **CC BY 4.0** – credited at the bottom of the photo. (The fern photo in the original design is on Unsplash, but I picked a freely licensed one from Wikimedia instead.)
   - Logo image: the Odin logo provided by The Odin Project for this project.
   - Fonts: **Roboto** for the text and **Cinzel** (bold) for the "ODIN" logo, both free from Google Fonts. The design used *Norse Bold*; its licence doesn't allow sharing the font file in a public repository, so I chose a free Google font instead.
6. **Extra:** Odin says mobile design is not needed yet, but I added one small media query so the page stacks into one column on phones.

## HTML and CSS concepts used
- **HTML:** `<form>`, `<label for>`, `<input>` types (`text`, `email`, `tel`, `password`), `name`, `autocomplete`, built-in validation (`required`, `minlength`, `pattern`, `type="email"`), the `form` attribute on a button, semantic tags (`<aside>`, `<main>`, `<section>`).
- **CSS:** Grid (`grid-template-columns`, `minmax()`, `gap`), Flexbox (centring the logo), custom properties (`--green`, `--focus`…), `clamp()` for sizes that grow with the screen, `background: url() / cover`, `rgba()` transparency, `box-shadow`, pseudo-classes `:focus`, `:hover`, `:user-invalid`, a small CSS reset, Google Fonts, one media query.

## What I learned
- How to build a real-looking form with **labels connected to inputs**, which is better for accessibility and lets you click the label.
- That HTML can **validate forms by itself** (required fields, minimum length, email format) without JavaScript.
- That `:user-invalid` is friendlier than `:invalid`, because it only shows red **after** the user has typed something.
- How to make text readable on top of a photo with a semi-transparent background.
- That checking that the two passwords **match** needs JavaScript – Odin covers that later, so for now each field is checked on its own.
- To always check the **licence** of images and fonts before using them in a project.

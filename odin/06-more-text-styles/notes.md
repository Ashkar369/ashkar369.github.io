# 06 – More Text Styles

## What this lesson is about
How to use **custom fonts** (not only the ones on the computer) and some extra CSS properties for text.

## Key points
### Fonts
- `font-family` takes a **list**: the browser uses the first one it has, e.g. `font-family: "Roboto", Arial, sans-serif;`. Always end with a generic family (`serif`, `sans-serif`, `monospace`).
- **System font stack** – use the font the user's computer already has (fast, no download): `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.
- **Online font libraries** (e.g. Google Fonts) – add a `<link>` in the `<head>` (or `@import` in CSS), then use the font name.
- **Downloaded fonts** – put the file (`.woff2`) in your project and load it with `@font-face`.
- Be careful: every extra font file makes the page slower. Use only the weights you need, and `font-display: swap` so text shows quickly.

### Text properties
- `font-style: italic;` – italic text (use `<em>` in HTML if it means stress).
- `letter-spacing` – space between letters. `line-height` – space between lines (around 1.5 is easy to read).
- `text-transform: uppercase | lowercase | capitalize`.
- `text-shadow: 2px 2px 4px grey;` – a shadow behind letters.
- Cutting long text with "…": `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`.

## Code example
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```
```css
body { font-family: "Roboto", Arial, sans-serif; line-height: 1.5; }
h1   { text-transform: uppercase; letter-spacing: .1em; text-shadow: 2px 2px 3px #aaa; }
.cut { width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
```

## Assignment I did
Read MDN's web fonts article and did its exercise idea (load a font with `@font-face` from a web font service), and read web.dev on font best practices and typography. `practice.html` uses Google Fonts, a system font stack and all the text properties above.

## Check yourself (my own questions – the lesson has no official Knowledge check)
1. **Why does `font-family` have several fonts in a list?** If the first font is missing, the browser tries the next one (fallbacks).
2. **What is a system font stack?** A list of fonts already installed on most computers, so nothing needs downloading.
3. **Two ways to use a font that isn't on the computer?** A font library like Google Fonts (`<link>`), or your own font file with `@font-face`.
4. **Why can too many fonts be bad?** They make the page slower to load.
5. **How do I cut long text with "…"?** `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`.

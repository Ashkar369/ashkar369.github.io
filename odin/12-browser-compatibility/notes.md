# 12 – Browser Compatibility

## What this lesson is about
Different browsers (Chrome, Firefox, Safari, Edge…) don't always support the same CSS and HTML features at the same time. This lesson explains why, a bit of history, and how to check if a feature is safe to use.

## Key points
- **History in short:** in the 1990s–2000s browsers fought each other ("browser wars") and added their own features, so websites often worked in only one browser. Internet Explorer was the slowest to follow standards. Today browsers follow the same standards much better.
- **Browser engines:** Chrome, Edge, Opera and Brave use **Chromium/Blink**; Firefox uses **Gecko**; Safari uses **WebKit**.
- **Browser compatibility** = whether a feature works in the browsers your visitors use.
- **New CSS features** go through steps: an idea → a draft at the W3C → browsers add it (sometimes first behind a flag or with a prefix like `-webkit-`) → all browsers support it.
- **How to check:** use **caniuse.com** or the "Browser compatibility" table at the bottom of every MDN page.
- **When is it safe?** When the browsers your users actually use support it (look at the percentage on Can I Use). For newer features, add a **fallback** or use `@supports`.
- **Mobile:** on **iPhone/iPad every browser** (even Chrome) used WebKit, Safari's engine, for a long time, so Safari support matters a lot for mobile users.

## Code example
```css
/* Fallback first, newer feature second */
.box { background: #2a7ae2; }
.box { background: color-mix(in srgb, #2a7ae2 70%, white); }

/* Only use a feature if the browser supports it */
@supports (display: grid) {
  .layout { display: grid; grid-template-columns: 1fr 3fr; }
}
```

## Assignment I did
Reviewed Can I Use for the features used in this course (Grid, custom properties, `clamp()`, `:user-invalid`, `<dialog>`, `:has()` – all widely supported today) and read the article about browsers on iOS. `practice.html` uses `@supports` to show which features your browser supports.

## Check yourself (my own questions – the lesson has no official Knowledge check)
1. **What is browser compatibility?** Whether a web feature works the same in different browsers.
2. **Which websites can I use to check support?** caniuse.com and the compatibility table on MDN.
3. **Which engine does Safari use?** WebKit.
4. **What does `@supports` do?** It applies CSS only if the browser understands a certain feature.
5. **Why is Safari important for mobile?** For a long time all iOS browsers had to use WebKit, Safari's engine.

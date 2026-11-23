# 03 – Tables

## What this lesson is about
How to build HTML tables for **data** (things that naturally have rows and columns, like a timetable or a price list). Not for page layout – that is what Flexbox and Grid are for.

## Key points
- `<table>` = the whole table. `<tr>` = one row. `<td>` = one normal cell. `<th>` = a heading cell.
- `<caption>` = the title of the table (helps everyone, especially screen-reader users).
- `<thead>`, `<tbody>`, `<tfoot>` = group the rows into head, body and foot. Easier to style and to read.
- `colspan="2"` = a cell is 2 columns wide. `rowspan="2"` = a cell is 2 rows tall.
- `<colgroup>` + `<col>` = style a whole column at once (for example a background colour).
- `scope="col"` / `scope="row"` on `<th>` tells screen readers whether the heading is for a column or a row – good for accessibility.
- Don't use tables to lay out a page. It is bad for accessibility and hard to change.

## Code example
```html
<table>
  <caption>My week</caption>
  <thead>
    <tr><th scope="col">Day</th><th scope="col">Class</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">Mon</th><td>WEB technologies</td></tr>
    <tr><th scope="row">Tue</th><td colspan="1">Cloud and IoT</td></tr>
  </tbody>
</table>
```

## Assignment I did
- Read MDN "Table basics" and "Table accessibility/advanced" and coded along.
- Did my own version of the MDN Tables assessment idea: a data table with a caption, header groups, `rowspan`, `colspan`, `scope` and a `<tfoot>` (see `practice.html`).

## Check yourself (my own questions – the lesson has no official Knowledge check)
1. **When should I use a table?** Only for data that has rows and columns, not for layout.
2. **What is the difference between `<th>` and `<td>`?** `<th>` is a heading cell (bold, centred by default), `<td>` is a normal data cell.
3. **How do I make one cell cover two columns?** Use `colspan="2"` on that cell.
4. **Why add `<caption>` and `scope`?** They make the table understandable for screen-reader users and give it a title.
5. **What are `<thead>`, `<tbody>` and `<tfoot>` for?** They split the table into header, body and footer groups so it is clearer and easier to style.

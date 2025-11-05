# Markdown Cheat Sheet

## Headers

```markdown
# H1 Header
## H2 Header
### H3 Header
#### H4 Header
##### H5 Header
###### H6 Header
```

## Text Formatting

```markdown
*italic text* or _italic text_
**bold text** or __bold text__
***bold and italic*** or ___bold and italic___
~~strikethrough text~~
`inline code`
```

## Lists

### Unordered Lists
```markdown
- Item 1
- Item 2
  - Nested item
  - Another nested item
- Item 3

* Alternative bullet
+ Another alternative
```

### Ordered Lists
```markdown
1. First item
2. Second item
   1. Nested numbered item
   2. Another nested item
3. Third item
```

## Links and Images

```markdown
[Link text](https://example.com)
[Link with title](https://example.com "Title text")
[Reference link][1]

[1]: https://example.com "Reference link"

![Alt text](image-url.jpg)
![Alt text](image-url.jpg "Image title")
```

## Code Blocks

### Inline Code
```markdown
Use `backticks` for inline code
```

### Code Blocks
````markdown
```
Basic code block
```

```python
# Code block with syntax highlighting
def hello_world():
    print("Hello, World!")
```
````

## Tables

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

| Left Align | Center Align | Right Align |
|:-----------|:------------:|------------:|
| Left       | Center       | Right       |
```

## Blockquotes

```markdown
> This is a blockquote
> 
> It can span multiple lines

> Nested blockquotes
>> Are also possible
```

## Horizontal Rules

```markdown
---
***
___
```

## Line Breaks

```markdown
End a line with two spaces  
to create a line break

Or use a blank line

to create a paragraph break
```

## Escape Characters

```markdown
Use backslash to escape special characters:
\* \_ \` \# \+ \- \. \! \[ \] \( \) \{ \} \|
```

## HTML Support

```markdown
<strong>Bold text using HTML</strong>
<em>Italic text using HTML</em>
<br> <!-- Line break -->
<kbd>Ctrl</kbd> + <kbd>C</kbd> <!-- Keyboard keys -->
```

## Task Lists (GitHub Flavored Markdown)

```markdown
- [x] Completed task
- [ ] Incomplete task
- [ ] Another incomplete task
```

## Footnotes (if supported)

```markdown
Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.
```

## Definition Lists (if supported)

```markdown
Term 1
: Definition for term 1

Term 2
: Definition for term 2
: Another definition for term 2
```

## Abbreviations (if supported)

```markdown
*[HTML]: Hyper Text Markup Language
*[CSS]: Cascading Style Sheets

The HTML specification is maintained by the W3C.
```

## Math (if supported)

```markdown
Inline math: $x = y + z$

Block math:
$$
\sum_{i=1}^{n} x_i = x_1 + x_2 + \cdots + x_n
$$
```

## Quick Reference

| Element | Syntax |
|---------|--------|
| Bold | `**text**` or `__text__` |
| Italic | `*text*` or `_text_` |
| Code | `` `code` `` |
| Link | `[text](url)` |
| Image | `![alt](url)` |
| Header | `# H1` to `###### H6` |
| List | `- item` or `1. item` |
| Quote | `> quote` |
| Rule | `---` |
| Table | `| col1 | col2 |` |
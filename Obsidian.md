#Computers
[[Obsidian Plugins]]

## Notion to Obsidian Regex Matching Patterns
```
Format:
FIND
REPLACE

Remove ---
---

Remove Lines:
(\n\s+\n|\n+)
\n

Replace spaces with tabs:
\s\s\s\s
\t

Convert $$ to $$$$
^(\s+)(\$[^$]*\n[^$]*\$)
$1$$$2$$

Convert $$ to $$$$ part 2
^(\s+-\s)(\$[^$]*\n[^$]*\$)
$1$$$2$$

SET TO NORMAL SEARCH AND REPLACE WITH CASE SENSITIVITY

Replace \rarr with ->
\rarr
\rightarrow

Replace \rarr with <-
\lrarr
\leftarrow

Replace \R with \mathbb{\R}
\R
\mathbb{\R}

Replace \bold with \textbf
\bold
\textbf

Replace \lang with \langle
\lang
\left\langle

Replace \rang with \rangle
\rang
\right\rangle

SET TO NORMAL SEARCH AND REPLACE WITHOUT CASE SENSITIVITY

Replace \oiint with \oint
\oiint
\oint
```

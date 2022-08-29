## Updating slides

Specify level-1, level-2, and level-3 heading for slide using `.section`, `.subsection`, and `.subsubsection`, respectively, in .Rmd file:

```r
--- .section

# Level-1 title to appear in TOC
## Subtitle


--- .subsection

# Level-2 title to appear in TOC
## Subtitle


--- .subsubsection

# Level-3 title to appear in TOC
## Subtitle

```


These only need to be specified on first slide, if a section consists of multiple slides. On the subsequent slides, the `<h1>` heading (`#`) is also optional. If it is not specified, it automatically takes the `<h1>` heading of the (sub)section it directly falls under.

```r
--- .section

# Section A
## Subtitle


---

# Custom h1 title for slide under Section A  // h1 can be specified
## Subtitle


---

## Subtitle  // If omitted, "Section A" will be the h1 for this slide

```

## Additional notes

If changes to figures aren't being updated, may need to clear cache/delete currently saved images:

```
rm slides/.cache/*
rm slides/assets/fig/*
```

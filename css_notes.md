- `text-align: left/center/right` -> aligns text wrt the parent.
- `text-decoration: underline/none/overline/line-through`
- `display: inline/block/inline-block/none`
![alt text](image.png)

- With the `display: inline` property. When an element is set to inline, its width properties (width, min-width, etc.) do not apply because inline elements shrink to fit their content and do not respect explicit width settings.

- `visibility: hidden` - the element remains in the html and the dom, its just not visible, whereas in display: none it is removed from the dom.

## position
![alt text](image-1.png)
- `z-index`: normally if two elements overlap then the one that occurs before in the code is place below the other, we can alter this behaviour by specifying z-index, the more the z-index the more the priority and the higher it is placed in the stack of overlapping elements.
# ⬛ Geometric Shapes & Blocks

Covers multiple related ranges:
- Box Drawing: U+2500–U+257F  
- Block Elements: U+2580–U+259F  
- Geometric Shapes: U+25A0–U+25FF  
- Extended Shapes: U+1F780–U+1F7FF

<div class="symbol-block" data-start="0x2500" data-end="0x257F"></div>
<div class="symbol-block" data-start="0x2580" data-end="0x259F"></div>
<div class="symbol-block" data-start="0x25A0" data-end="0x25FF"></div>
<div class="symbol-block" data-start="0x1F780" data-end="0x1F7FF"></div>

<script>
document.querySelectorAll('.symbol-block').forEach(block => {
  const start = parseInt(block.dataset.start);
  const end = parseInt(block.dataset.end);
  for (let code = start; code <= end; code++) {
    const ch = String.fromCodePoint(code);
    if (!/\p{C}/u.test(ch)) {
      const span = document.createElement('span');
      span.textContent = ch;
      span.style.cssText = 'padding:6px; font-size:1.6em; cursor:pointer;';
      span.onclick = () => navigator.clipboard.writeText(ch);
      block.appendChild(span);
    }
  }
});
</script>
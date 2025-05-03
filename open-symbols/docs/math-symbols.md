# ➗ Math Symbols

Ranges:
- Math Operators: U+2200–U+22FF  
- Misc. Math A: U+27C0–U+27EF  
- Misc. Math B: U+2980–U+29FF

<div class="symbol-block" data-start="0x2200" data-end="0x22FF"></div>
<div class="symbol-block" data-start="0x27C0" data-end="0x27EF"></div>
<div class="symbol-block" data-start="0x2980" data-end="0x29FF"></div>


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

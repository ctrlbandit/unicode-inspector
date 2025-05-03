# 🎭 Pictographs & Emoticons

Includes:
- Misc Symbols & Pictographs: U+1F300–U+1F5FF  
- Emoticons: U+1F600–U+1F64F  
- Transport: U+1F680–U+1F6FF  
- Supplemental: U+1F900–U+1F9FF  
- Extended-A: U+1FA70–U+1FAFF

<div class="symbol-block" data-start="0x1F300" data-end="0x1F5FF"></div>
<div class="symbol-block" data-start="0x1F600" data-end="0x1F64F"></div>
<div class="symbol-block" data-start="0x1F680" data-end="0x1F6FF"></div>
<div class="symbol-block" data-start="0x1F900" data-end="0x1F9FF"></div>
<div class="symbol-block" data-start="0x1FA70" data-end="0x1FAFF"></div>

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
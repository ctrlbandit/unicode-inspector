# ✦ Dingbats (U+2700–U+27BF)

<div class="symbol-block" data-start="0x2700" data-end="0x27BF"></div>

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

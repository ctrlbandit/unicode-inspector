# (っ◕‿◕)っ Kaomojis

Click to copy any kaomoji!

<div class="kaomoji-block">
  <span>(｀^´)</span>
  <span>(;><;)</span>
  <span>(•﹏•)</span>
  <span>₍^.ꞈ.^₎⟆</span>
  <span>( º - º)</span>
  <span>|•́ - •̀｡)…</span>
  <span>(—̄ o —̄) ᶻᶻᶻ</span>
  <span>(>∀<)</span>
  <span>(>︿<｡)</span>

  <span>◉‿◉</span>
  <span>｡◕‿◕｡</span>
  <span>(. ❛ ᴗ ❛.)</span>
  <span>(-‿-)</span>
  <span>ʘ‿ʘ</span>
  <span>(✷‿✷)</span>
  <span>(◔‿◔)</span>

  <span>(◕ᴗ◕✿)</span>
  <span>(ʘᴗʘ✿)</span>
  <span>(•ᴗ•)</span>
  <span>( ╹▽╹ )</span>
  <span>(≧▽≦)</span>
  <span>(☆▽☆)</span>
  <span>(>___<)</span>
</div>

<style>
.kaomoji-block {
  font-size: 1.4em;
  line-height: 2.4;
  user-select: text;
}
.kaomoji-block span {
  display: inline-block;
  padding: 6px 10px;
  margin: 4px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
}
.kaomoji-block span:hover {
  background: #e3f2fd;
}
</style>

<script>
document.querySelectorAll('.kaomoji-block span').forEach(span => {
  span.addEventListener('click', () => {
    navigator.clipboard.writeText(span.textContent);
    span.style.background = '#cce5ff';
    setTimeout(() => {
      span.style.background = '';
    }, 500);
  });
});
</script>

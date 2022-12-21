//読み込み完了時、datetime-localを現在時刻にする
window.addEventListener('DOMContentLoaded', function () {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  document.getElementById('start').value = now.toISOString().slice(0, -1).substr(0, 16);
  document.getElementById('end').value = now.toISOString().slice(0, -1).substr(0, 16);

})





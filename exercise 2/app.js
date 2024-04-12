const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  const width = window.screen.width;
  const height = window.screen.height;

  alert(`Screen width is ${width}, screen height is ${height}!`);
});

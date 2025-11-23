document.onclick = function (e) {
  const span = document.createElement("span");
  span.className = "click-effect";
  span.style.left = e.pageX + "px";
  span.style.top = e.pageY + "px";
  document.body.appendChild(span);
  setTimeout(() => {
    span.remove();
  }, 300);
};
//console.log("Mouse Click Script Loaded");

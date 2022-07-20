let ePalette = document.querySelectorAll(".palette div");
let h2 = document.querySelector("h2");
let back = document.querySelector(".back");
back.style.backgroundColor = ePalette[0].dataset.color;
h2.style.color = ePalette[0].dataset.tcolor;
ePalette[0].style.borderColor = ePalette[0].dataset.tcolor;
ePalette[0].className = "active";
ePalette.forEach((e) => {
  e.style.backgroundColor = e.dataset.color;
  e.style.borderColor = e.dataset.tcolor;
  e.onclick = function () {
    back.style.backgroundColor = e.dataset.color;
    h2.textContent = e.dataset.color;
    h2.style.color = e.dataset.tcolor;
    ePalette.forEach((e) => e.classList.remove("active"));
    this.classList.add("active");
    navigator.clipboard.writeText(e.dataset.color.toUpperCase());
  };
});

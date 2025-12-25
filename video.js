const checkbox = document.querySelector('input[type="checkbox"]');
const video = document.querySelector(".videoBackground");
const title = document.getElementById("title2");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    video.pause();
    title.style.color = "black";
    title.innerText = "Play";
  } else {
    video.play();
    title.style.color = "white";
    title.innerText = "Stop";
  }
});

window.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
    checkbox.checked = !checkbox.checked;
    checkbox.dispatchEvent(new Event("change"));
  }
});

const countDisplay = document.getElementById("count");
const decreaseBtn = document.getElementById("dic");
const resetBtn = document.getElementById("res");
const increaseBtn = document.getElementById("inc");

decreaseBtn.addEventListener("click", decreaseCount);
resetBtn.addEventListener("click", resetCount);
increaseBtn.addEventListener("click", increaseCount);

let currentCount = 0;

function decreaseCount() {
  currentCount--;
  countDisplay.innerHTML = currentCount;
  updateColor();
}
function resetCount() {
  currentCount = 0;
  countDisplay.innerHTML = currentCount;
  updateColor();
}
function increaseCount() {
  currentCount++;
  countDisplay.innerHTML = currentCount;
  updateColor();
}

function updateColor() {
  if (currentCount > 0) {
    countDisplay.style.color = "green";
  } else if (currentCount === 0) {
    countDisplay.style.color = "black";
  } else {
    countDisplay.style.color = "red";
  }
}

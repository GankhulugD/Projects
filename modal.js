const modalButton = document.getElementById("modalButton");
const modalContent = document.getElementById("modalContent");
const contentButton = document.getElementById("contentButton");
const flexModal = document.getElementById("flexModal");

modalButton.addEventListener("click", contentSee);
contentButton.addEventListener("click", contentHide);

function contentSee() {
  modalContent.style.display = "flex";
  flexModal.style.display = "none";
}
function contentHide() {
  modalContent.style.display = "none";
  flexModal.style.display = "flex";
}

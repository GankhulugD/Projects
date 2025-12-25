const faqItems = document.querySelectorAll(".faqItemContainer");

faqItems.forEach((item) => {
  const button = item.querySelector(".shar");

  button.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

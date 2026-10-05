const items = document.querySelectorAll(".faq-item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    // keep all items open when clicked
    // item.classList.toggle("active");

    // have only one open at once
    const isActive = item.classList.contains("active");

    items.forEach((i) => i.classList.remove("active"));

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

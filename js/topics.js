function filterTopics(subject) {
  const items = document.querySelectorAll(".topic-item");
  const buttons = document.querySelectorAll(".filter-btn");

  // Update buttons
  buttons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  // Filter items
  items.forEach((item) => {
    if (subject === "all" || item.dataset.subject === subject) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

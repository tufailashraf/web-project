document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("successMessage").style.display = "block";
  this.reset();
  setTimeout(() => {
    document.getElementById("successMessage").style.display = "none";
  }, 5000);
});

function toggleFaq(element) {
  const body = element.nextElementSibling;
  const icon = element.querySelector(".faq-icon");
  body.classList.toggle("show");
  icon.classList.toggle("show");
}

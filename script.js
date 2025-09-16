// Xử lý toggle khi click vào h2
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("h2").forEach((h2) => {
    h2.addEventListener("click", () => {
      h2.classList.toggle("active");
      const content = h2.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });
});

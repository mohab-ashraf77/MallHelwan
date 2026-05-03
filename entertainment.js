const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".cards");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    buttons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    cards.forEach(function(card) {
      const category = card.getAttribute("data-category");

      if (filter === "all" || filter === category) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});
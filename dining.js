document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("menuSearch");
    const menuItems = document.querySelectorAll(".menu-item");
    const noResults = document.querySelector(".no-results");

    searchInput.addEventListener("input", function () {
        const value = this.value.toLowerCase().trim();
        let visibleCount = 0;

        menuItems.forEach(item => {
            const text = item.innerText.toLowerCase();
            if (text.includes(value)) {
                item.style.display = "block";
                visibleCount++;
            } else {
                item.style.display = "none";
            }
        });

        noResults.style.display = visibleCount === 0 ? "block" : "none";
    });

});
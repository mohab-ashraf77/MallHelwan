const searchInput = document.getElementById('store-search');
const searchButton = document.getElementById('store-search-btn');
const storeCards = document.querySelectorAll('.store-card');

function filterStores() {
  const query = searchInput.value.trim().toLowerCase();

  storeCards.forEach(card => {
    const name = card.querySelector('p')?.textContent.trim().toLowerCase() || '';
    const alt = card.querySelector('img')?.alt.toLowerCase() || '';
    const category = card.closest('.store-category')?.querySelector('h3')?.textContent.trim().toLowerCase() || '';
    const matches = !query || name.includes(query) || alt.includes(query) || category.includes(query);
    card.style.display = matches ? '' : 'none';
  });
}

if (searchButton) {
  searchButton.addEventListener('click', filterStores);
}

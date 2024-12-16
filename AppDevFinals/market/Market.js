// Announcement
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("announcement");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); 
}

// Filters
function updatePriceValue(rangeInput) {
  const priceValue = document.getElementById("priceValue");
  priceValue.textContent = `₱${parseFloat(rangeInput.value).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
}

function updateSpecificPrice(input) {
  const value = parseFloat(input.value.replace(/,/g, ""));
  input.value = isNaN(value) ? "" : value.toLocaleString(undefined, { minimumFractionDigits: 2 });
}
function applyFilters() {
  const rangeValue = parseFloat(document.getElementById("priceRange").value);
  const specificPriceInput = document.getElementById("specificPrice").value;
  const specificPrice = parseFloat(specificPriceInput.replace(/,/g, ""));
  const selectedCategories = Array.from(
    document.querySelectorAll('.filter-section input[type="checkbox"]:checked')
  ).map(checkbox => checkbox.value);

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const cardPrice = parseFloat(card.getAttribute("data-price"));
    const category = card.getAttribute("data-category");

    const matchesPrice = !isNaN(specificPrice) ? cardPrice === specificPrice : cardPrice >= rangeValue;
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(category);

    card.style.display = matchesPrice && matchesCategory ? "block" : "none";
  });

  const priceMessage = specificPriceInput
    ? `Specific Price: ₱${specificPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}`
    : `Price Range: ₱${rangeValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
  const categoriesMessage = selectedCategories.length > 0
    ? `Checkbox: ${selectedCategories.join(", ")}`
    : "Checkbox: All";

  alert(`Filters Applied.\n${priceMessage}\n${categoriesMessage}`);
}

document.getElementById("priceValue").addEventListener("input", updatePriceValue);
document.getElementById("specificPrice").addEventListener("input", updateSpecificPrice);

document.getElementById("confirmPriceButton").addEventListener("click", applyFilters);
const products = [
  {
    name: "Hollow Blocks",
    category: "Structural",
    image: "assets/images/Hollow-blocks.webp",
    description: "Durable hollow blocks for cost-effective and strong wall construction."
  },
  {
    name: "Paving Slabs",
    category: "Landscaping",
    image: "assets/images/interlocking-cabro-blocks.webp",
    description: "Beautiful paving slabs for driveways, walkways, and gardens."
  },
  {
    name: "Double T Cabro Pavers",
    category: "Landscaping",
    image: "assets/images/Double-T-Cabro-Pavers.webp",
    description: "Interlocking pavers suitable for heavy industrial traffic areas, footpaths, streetscapes, and road infrastucture."
  }
];
const sliderContainer = document.querySelector("#productSlider"); // parent element for slider items
const btnPrev = document.querySelector(".slider-btn.left");
const btnNext = document.querySelector(".slider-btn.right");

let startIndex = 0;
const itemsPerPage = 3; // adjust for viewport

function renderProducts() {
  sliderContainer.innerHTML = ""; // clear current view

  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = products.slice(startIndex, endIndex);

  visibleProducts.forEach(product => {
    sliderContainer.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" class="product-image" />
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-description">${product.description}</p>
      </div>
    `;
  });
}

btnNext.addEventListener("click", () => {
  if (startIndex + itemsPerPage < products.length) {
    startIndex++;
    renderProducts();
  }
});

btnPrev.addEventListener("click", () => {
  if (startIndex > 0) {
    startIndex--;
    renderProducts();
  }
});

// Initial render
renderProducts();

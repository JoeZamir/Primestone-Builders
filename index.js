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
const sliderContainer = document.querySelector(".slider-container"); // parent element for slider items

products.forEach(product => {
  sliderContainer.innerHTML += `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <span class="product-category">${product.category}</span>
      <h3 class="product-title">${product.name}</h3>
      <p class="product-description">${product.description}</p>
    </div>
  `;
});

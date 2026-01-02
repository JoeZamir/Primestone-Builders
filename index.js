// MOBILE NAVIGATION TOGGLE LOGIC
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  const isExpanded = nav.classList.contains("active");
  toggle.setAttribute("aria-expanded", isExpanded);
  toggle.textContent = isExpanded ? "✕" : "☰";
});
// Close mobile nav when clicking links
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      nav.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    }
  });
});

// PRODUCT GALLERY LOGIC
const products = [
  {
    image: "/assets/images/products/cabro-paving-blocks.webp",
    name: "Cabro Paving Blocks",
    category: "Landscaping",
    icon: "fa-solid fa-tree",
    usage: "Ideal for driveways, parking areas, and pedestrian walkways where durability, drainage, and ease of maintenance are required.",
    description: "Interlocking concrete paving blocks designed to provide long-lasting surface strength and flexible installation."
  },
  {
    image: "/assets/images/products/trihrex-paver.jpg",
    name: "Trihrex Paver",
    category: "Landscaping",
    icon: "fa-solid fa-tree",
    usage: "Suitable for residential driveways, courtyards, and outdoor spaces where both visual appeal and structural stability are important.",
    description: "Hexagon-shaped paving blocks that create distinctive patterns while maintaining strong interlock and load distribution."
  },
  {
    image: "/assets/images/products/double-t-paver.webp",
    name: "Double T",
    category: "Infrastructure",
    icon: "fa-solid fa-road",
    usage: "Best suited for high-traffic roads, industrial yards, and loading areas subjected to heavy vehicles and frequent use.",
    description: "Heavy-duty interlocking pavers engineered for high load capacity and long-term performance under demanding conditions."
  },
  {
    image: "/assets/images/products/aristo-paver.jpg",
    name: "Aristo Paver",
    category: "Landscaping",
    icon: "fa-solid fa-tree",
    usage: "Ideal for patios, walkways, and landscaped environments where a refined appearance is desired without compromising durability.",
    description: "Decorative concrete pavers designed to balance aesthetic appeal with reliable structural performance."
  },
  {
    image: "/assets/images/products/uni-paver-cabro-blocks.jpg",
    name: "Uni-Paver Cabro Blocks",
    category: "Landscaping",
    icon: "fa-solid fa-tree",
    usage: "Suitable for commercial pavements, public spaces, and large outdoor areas requiring consistent alignment and surface stability.",
    description: "Uniform interlocking pavers offering ease of installation, strength, and long-term resistance to movement."
  },
  {
    image: "/assets/images/products/hollow-blocks.jpg",
    name: "Hollow Blocks",
    category: "Structural",
    icon: "fa-solid fa-building",
    usage: "Commonly used for load-bearing and non-load-bearing walls in residential, commercial, and industrial construction projects.",
    description: "Durable hollow concrete blocks that reduce material usage while maintaining structural strength and thermal efficiency."
  },
  {
    image: "/assets/images/products/hollow-pots.jpg",
    name: "Hollow Pots",
    category: "Structural",
    icon: "fa-solid fa-building",
    usage: "Ideal for slab and floor construction where reducing dead load without sacrificing strength is essential.",
    description: "Lightweight concrete pots used within reinforced slabs to improve efficiency and material performance."
  },
  {
    image: "/assets/images/products/interlocking-blocks.jpg",
    name: "Interlocking Blocks",
    category: "Infrastructure",
    icon: "fa-solid fa-road",
    usage: "Ideal for retaining walls, slope stabilization, and erosion control in both civil and landscaping projects.",
    description: "Interlocking concrete blocks designed to form stable, flexible structures capable of adapting to ground movement."
  },
  {
    image: "/assets/images/products/road-channels.jpg",
    name: "Road Channels",
    category: "Infrastructure",
    icon: "fa-solid fa-road",
    usage: "Designed for effective stormwater management along roads, pavements, and developed outdoor surfaces.",
    description: "Precast concrete drainage channels that efficiently guide surface water and reduce erosion and flooding risks."
  },
  {
    image: "/assets/images/products/road-kerbs.jpg",
    name: "Road Kerbs",
    category: "Infrastructure",
    icon: "fa-solid fa-road",
    usage: "Used to define road edges, separate traffic zones, and improve drainage control in urban and commercial developments.",
    description: "Precast concrete kerbs that provide clear boundary definition and long-lasting edge protection."
  },
  {
    image: "/assets/images/products/slabs.jpg",
    name: "Slabs",
    category: "Structural",
    icon: "fa-solid fa-building",
    usage: "Suitable for floors, pavements, and industrial surfaces requiring high load-bearing capacity and uniform finish.",
    description: "Precast concrete slabs manufactured for strength, consistency, and long-term structural reliability."
  }
];

const galleryContainer = document.querySelector(".gallery-container");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card card";

  card.innerHTML = `
    <div class="position">
      <img src="${product.image}" alt="${product.name}" class="product-image"/>
      <span class="product-category badge">${product.category}</span>
    </div>
    <div  class="flex">
      <h3 class="product-name">${product.name}</h3>
      <div class="product-icon"><i class="${product.icon}"></i></div>
    </div>
    <p class="product-description">${product.description}</p>
    <hr/>
    <p class="product-usage"><strong>Usage:</strong> ${product.usage}</p>
  `;

  galleryContainer.appendChild(card);
});

// infinite horizontal gallery card scrolling

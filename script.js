AOS.init();

let data = [
  {
    id: 1,
    name: "Nike Air Max Jacket",
    brand: "Nike", 
    img: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/a25c89b8-7596-4e8c-96ad-3a8501769e35/M+NK+TECH+SHORI+KNIT+TRACK+JKT.png",
    price: "$129.99",
    description: "Premium quality sports jacket with Air Max technology",
    stock: 12,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Olive"],
    rating: 4.6,
  },
  {
    id: 2,
    name: "Nike Revolution Shoes",
    brand: "Nike", 
    img: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/d5777ad0-1c53-4205-b406-ff75334a196a/NIKE+C1TY+PRM.png",
    price: "$89.99",
    description: "Comfortable running shoes for everyday wear",
    stock: 25,
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["White", "Black", "Blue"],
    rating: 4.5,
  },
  {
    id: 6,
    name: "Adidas Track Jacket",
    brand: "Adidas", 
    img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/afdf5c0dcbab4cdbb851425aa22dd408_9366/essentials-oversized-fleece-hoodie.jpg",
    price: "$119.99",
    description: "Classic track jacket with iconic stripes",
    stock: 15,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Green"],
    rating: 4.6,
  },
  {
    id: 11,
    name: "Puma Windbreaker",
    brand: "Puma", 
    img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/634415/01/fnd/PNA/fmt/png/PUMATECH-Men's-Zip-Up-Hoodie",
    price: "$99.99",
    description: "Lightweight jacket for all weather conditions",
    stock: 16,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy"],
    rating: 4.5,
  },
];

let container = document.getElementById('p-container');

for (let i = 0; i < data.length; i++) {
  const item = data[i];
  
  container.innerHTML += `
    <div class="col">
      <div class="card h-100 w-75 shadow-sm">
        <img src="${item.img}" class="card-img-top" alt="${item.name}">
        <div class="card-body text-center d-flex flex-column">
          <h5 class="card-title">${item.name}</h5>
          <p class="text-muted small mb-2">Brand: ${item.brand.toUpperCase()}</p>
          <p class="fw-bold text-danger fs-5 mb-2">${item.price}</p>
          <p class="small text-secondary mb-2">${item.description}</p>
          ${item.stock ? `<p class="small mb-2"><strong>In Stock:</strong> ${item.stock} units</p>` : ""}
          ${item.sizes ? `<div class="mb-2">
            <small class="text-muted">Sizes: ${item.sizes.join(", ")}</small>
          </div>` : ""}
          ${item.colors ? `<div class="mb-3">
            <small class="text-muted">Colors: ${item.colors.join(", ")}</small>
          </div>` : ""}
          ${item.rating ? `<p class="mb-2">⭐ ${item.rating}/5</p>` : ""}
          <a class="btn btn-danger mt-auto" href="./Sproduct.html?id=${item.id}">VIEW DETAILS</a>
        </div>
      </div>
    </div>
  `;
}


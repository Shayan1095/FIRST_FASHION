AOS.init();

const products = {
  nike: [
    {
      id: 1,
      name: "Nike Air Max Jacket",
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
      img: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/d5777ad0-1c53-4205-b406-ff75334a196a/NIKE+C1TY+PRM.png",
      price: "$89.99",
      description: "Comfortable running shoes for everyday wear",
      stock: 25,
      sizes: ["7", "8", "9", "10", "11"],
      colors: ["White", "Black", "Blue"],
      rating: 4.5,
    },
    {
      id: 3,
      name: "Nike Tech Hoodie",
      img: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/178f3c35-b3b9-4fe1-bf4f-d026e9e66d0e/M+CLUB+BB+HOODIE+CWASH.png",
      price: "$79.99",
      description: "Stylish hoodie with modern design",
      stock: 18,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Gray", "Black", "Navy"],
      rating: 4.7,
    },
    {
      id: 4,
      name: "Nike Performance Cap",
      img: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/bc985bf9-b3e1-47f8-ad70-24335d8a0de2/U+NK+CLUB+CAP+S+CB+SWSH+FS.png",
      price: "$29.99",
      description: "Breathable cap for sports and casual wear",
      stock: 40,
      sizes: ["S", "M", "L","XL"],
      colors: ["Black", "White", "Red"],
      rating: 4.3,
    },
    {
      id: 5,
      name: "Nike Dri-FIT Shirt",
      img: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/8968e343-77c6-41fe-8324-7f72ba5dcb53/M+NK+TCH+FLC+CREW.png",
      price: "$45.99",
      description: "Moisture-wicking shirt for active lifestyle",
      stock: 30,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Gray"],
      rating: 4.4,
    }
  ],

  adidas: [
    {
      id: 6,
      name: "Adidas Track Jacket",
      img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/afdf5c0dcbab4cdbb851425aa22dd408_9366/essentials-oversized-fleece-hoodie.jpg",
      price: "$119.99",
      description: "Classic track jacket with iconic stripes",
      stock: 15,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Green"],
      rating: 4.6,
    },
    {
      id: 7,
      name: "Adidas Ultraboost Shoes",
      img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/9d87bb33ae164cc38058a8bd00ef61d6_9366/samba-og-shoes.jpg",
      price: "$180.99",
      description: "Revolutionary cushioning for ultimate comfort",
      stock: 20,
      sizes: ["7", "8", "9", "10", "11", "12"],
      colors: ["White", "Black"],
      rating: 4.8,
    },
    {
      id: 8,
      name: "Adidas Originals Hoodie",
      img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/f5a1da1295c4416788380a4df30f9102_9366/trefoil-essentials-hoodie.jpg",
      price: "$74.99",
      description: "Retro-inspired hoodie with modern comfort",
      stock: 22,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Gray", "Blue"],
      rating: 4.5,
    },
    {
      id: 9,
      name: "Adidas Baseball Cap",
      img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e45429f569344898d31622bafdf48bf_9366/mens-mexico-tournament-5-panel.jpg",
      price: "$24.99",
      description: "Adjustable cap with embroidered logo",
      stock: 35,
      sizes: ["S","M","L","XL"],
      colors: ["Black", "White", "Red", "Blue"],
      rating: 4.2,
    },
    {
      id: 10,
      name: "Adidas Training Shirt",
      img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/d7ddf314e8bc4868b87389734842c038_9366/spain-26-home-authentic-jersey.jpg",
      price: "$39.99",
      description: "Performance shirt for intense workouts",
      stock: 28,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "White", "Blue"],
      rating: 4.4,
    }
  ],

  puma: [
    {
      id: 11,
      name: "Puma Windbreaker",
      img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/634415/01/fnd/PNA/fmt/png/PUMATECH-Men's-Zip-Up-Hoodie",
      price: "$99.99",
      description: "Lightweight jacket for all weather conditions",
      stock: 16,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Gray", "Navy"],
      rating: 4.5,
    },
    {
      id: 12,
      name: "Puma Suede Classic",
      img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/399781/07/mod01/fnd/PNA/fmt/png/Suede-Classic-Sneakers",
      price: "$75.99",
      description: "Timeless sneaker with premium suede",
      stock: 24,
      sizes: ["7", "8", "9", "10", "11"],
      colors: ["Blue", "Red", "Black", "Green"],
      rating: 4.7,
    },
    {
      id: 13,
      name: "Puma Essentials Hoodie",
      img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/682586/01/mod01/fnd/PNA/fmt/png/PUMA-Essentials-Men's-Zip-Up-Hoodie",
      price: "$64.99",
      description: "Comfortable everyday hoodie",
      stock: 19,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Gray", "White"],
      rating: 4.4,
    },
    {
      id: 14,
      name: "Puma Sports Cap",
      img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/927423/50/fnd/PNA/fmt/png/PUMA-Men's-Adjustable-Hat",
      price: "$27.99",
      description: "Sleek design for athletic performance",
      stock: 32,
      sizes: ["S","M","L","XL"],
      colors: ["Black", "White", "Blue"],
      rating: 4.3,
    },
    {
      id: 15,
      name: "Puma Active Shirt",
      img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/660101/01/mod01/fnd/PNA/fmt/png/PUMA-x-NEYMAR-Creativity-Men's-Soccer-Tee",
      price: "$42.99",
      description: "Breathable fabric for active lifestyle",
      stock: 26,
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Black", "Blue"],
      rating: 4.5,
    }
  ],

  zara: [
    {
      id: 16,
      name: "Zara Denim Jacket",
      img: "https://static.zara.net/assets/public/5965/dc1d/cd144bedbb2c/ee2158be5e25/00840332400-e1/00840332400-e1.jpg?ts=1756994300531&w=358",
      price: "$89.99",
      description: "Trendy denim jacket with modern fit",
      stock: 14,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Blue", "Black", "Light Blue"],
      rating: 4.6,
    },
    {
      id: 17,
      name: "Zara Slim Fit Jeans",
      img: "https://static.zara.net/assets/public/1b7e/e849/425b43a88b15/cb7aa0ad4086/08062305407-e1/08062305407-e1.jpg?ts=1753352026320&w=358",
      price: "$59.99",
      description: "Premium denim with perfect fit",
      stock: 27,
      sizes: ["28", "30", "32", "34", "36"],
      colors: ["Blue", "Black", "Gray"],
      rating: 4.5,
    },
    {
      id: 18,
      name: "Zara Oxford Shirt",
      img: "https://static.zara.net/assets/public/980a/fe24/54844512b0ef/ac3c995acea4/01063363250-e1/01063363250-e1.jpg?ts=1758532066453&w=358",
      price: "$49.99",
      description: "Classic shirt for formal occasions",
      stock: 21,
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Blue", "Pink"],
      rating: 4.4,
    },
    {
      id: 19,
      name: "Zara Wool Coat",
      img: "https://static.zara.net/assets/public/96f4/fa42/9d924c38bd58/73a399124d6f/03736044700-p/03736044700-p.jpg?ts=1767958698997&w=307",
      price: "$159.99",
      description: "Elegant coat for winter season",
      stock: 8,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Camel", "Gray"],
      rating: 4.7,
    },
    {
      id: 20,
      name: "Zara Knit Top",
      img: "https://static.zara.net/assets/public/7365/77f5/0f344477b0de/d4e38f905529/00526398807-e1/00526398807-e1.jpg?ts=1763624015449&w=358",
      price: "$39.99",
      description: "Soft knit top with stylish design",
      stock: 23,
      sizes: ["XS", "S", "M", "L"],
      colors: ["Beige", "Black", "White"],
      rating: 4.3,
    }
  ],

  gucci: [
    {
      id: 21,
      name: "Gucci Bomber Jacket",
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1758096952/828895_XNA7G_1000_001_100_0000_Light-Soft-leather-zip-jacket.jpg",
      price: "$2,450.00",
      description: "Luxury bomber with signature details",
      stock: 5,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Navy"],
      rating: 4.9,
    },
    {
      id: 22,
      name: "Gucci Ace Sneakers",
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1689611499/760775_FACMZ_9746_001_100_0000_Light-Mens-Gucci-Ace-sneaker-with-Web.jpg",
      price: "$650.00",
      description: "Iconic sneakers with embroidered bee",
      stock: 12,
      sizes: ["7", "8", "9", "10", "11"],
      colors: ["White", "Black"],
      rating: 4.8,
    },
    {
      id: 23,
      name: "Gucci Leather Bag",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG25mWcNKr0pm6FKazzfR0e6BxwXaS4Cmi3A&s",
      price: "$420.00",
      description: "Double G buckle leather belt",
      stock: 15,
      sizes: ["75", "80", "85", "90", "95"],
      colors: ["Black", "Brown"],
      rating: 4.7,
    },
    {
      id: 24,
      name: "Gucci Polo Shirt",
      img: "https://images.brownthomas.com/bta/2001119886_01.jpg?$pdp_zoom$",
      price: "$790.00",
      description: "Premium cotton polo with logo",
      stock: 10,
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Black", "Navy"],
      rating: 4.6,
    },
    {
      id: 25,
      name: "Gucci GG Marmont Bag",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmSjKrrN6waoBst55e_Q1hKMuoO2dyAk0fQ&s",
      price: "$2,100.00",
      description: "Quilted leather shoulder bag",
      stock: 7,
      sizes: ["S","M","L","XL"],
      colors: ["Black", "Red", "Pink"],
      rating: 4.9,
    }
  ]
};





Object.keys(products).forEach(brand => {
  products[brand].forEach((item, index) => {
    const container = document.getElementById(`${brand}-container`);

    if (!container) {
      console.log(`Container not found: ${brand}-container`);
      return;
    }

    const col = document.createElement("div");
    col.className = "col";
    col.setAttribute("data-aos", "fade-up");
    col.setAttribute("data-aos-delay", index * 50);

    col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${item.img}" class="card-img-top" alt="${item.name}">
          <div class="card-body text-center d-flex flex-column">
            <h5 class="card-title">${item.name}</h5>
            <p class="text-muted small mb-2">Brand: ${brand.toUpperCase()}</p>
            <p class="fw-bold text-danger fs-5 mb-2">${item.price}</p>
            <p class="small text-secondary mb-2">${item.description}</p>
            
            ${item.stock ? `<p class="small mb-2"><strong>In Stock:</strong> ${item.stock} units</p>` : ''}
            
            ${item.sizes ? `
              <div class="mb-2">
                <small class="text-muted">Sizes: ${item.sizes.join(', ')}</small>
              </div>
            ` : ''}
            
            ${item.colors ? `
              <div class="mb-3">
                <small class="text-muted">Colors: ${item.colors.join(', ')}</small>
              </div>
            ` : ''}
            
            ${item.rating ? `<p class="mb-2">⭐ ${item.rating}/5</p>` : ''}
            
            <a class="btn btn-danger mt-auto" href="./Sproduct.html?id=${item.id}">VIEW DETAILS</a>
          </div>
        </div>
      `;

    container.appendChild(col);
  });
});

function filterProducts(selectedBrand) {

  let nike = document.getElementById("nike");
  let adidas = document.getElementById("adidas");
  let puma = document.getElementById("puma");
  let zara = document.getElementById("zara");
  let gucci = document.getElementById("gucci");

  // Step 1: Show everything (default state)
  nike.style.display = "block";
  adidas.style.display = "block";
  puma.style.display = "block";
  zara.style.display = "block";
  gucci.style.display = "block";

  // Step 2: If NOT "all", hide others
  if (selectedBrand !== "all") {
    nike.style.display = "none";
    adidas.style.display = "none";
    puma.style.display = "none";
    zara.style.display = "none";
    gucci.style.display = "none";

    // Show only selected brand
    document.getElementById(selectedBrand).style.display = "block";
  }
}
let dropdown = document.getElementById("dropdown");
let selectedText = document.getElementById("selectedText");

function toggleDropdown() {
  dropdown.classList.toggle("open");
}

function selectBrand(brand, text) {
  selectedText.innerText = text;
  dropdown.classList.remove("open");
  filterProducts(brand);
}
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const container = document.getElementById('container');
const productID = urlParams.get('id');
const products = {
  nike: [
    {
      id: 1,
      name: "Nike Air Max Jacket",
      Brand:"Nike",
      img: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/a25c89b8-7596-4e8c-96ad-3a8501769e35/M+NK+TECH+SHORI+KNIT+TRACK+JKT.png",
      price: "$129.99",
      description: "Nike Air Max Jacket is designed for everyday comfort and modern style.Lightweight fabric keeps you warm without feeling heavy.Perfect for casual wear, outdoor activities, and daily use.",
      stock: 12,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Olive"],
      rating: 4.6,
    },
    {
      id: 2,
      name: "Nike Revolution Shoes",
      Brand:"Nike",
      img: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/d5777ad0-1c53-4205-b406-ff75334a196a/NIKE+C1TY+PRM.png",
      price: "$89.99",
      description: "Nike Revolution Shoes provide excellent cushioning and long-lasting comfort.Durable sole with breathable upper material.Ideal for running, walking, gym workouts, and casual wear.",
      stock: 25,
      sizes: ["7", "8", "9", "10", "11"],
      colors: ["White", "Black", "Blue"],
      rating: 4.5,
    },
    {
      id: 3,
      name: "Nike Tech Hoodie",
      Brand:"Nike",
      img: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/178f3c35-b3b9-4fe1-bf4f-d026e9e66d0e/M+CLUB+BB+HOODIE+CWASH.png",
      price: "$79.99",
      description: "Nike Tech Hoodie offers a sleek design with soft and comfortable fabric.Keeps you warm while maintaining breathability.Perfect for casual wear, workouts, and everyday activities.",
      stock: 18,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Gray", "Black", "Navy"],
      rating: 4.7,
    },
    {
      id: 4,
      name: "Nike Performance Cap",
      Brand:"Nike",
      img: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/bc985bf9-b3e1-47f8-ad70-24335d8a0de2/U+NK+CLUB+CAP+S+CB+SWSH+FS.png",
      price: "$29.99",
      description: "Nike Performance Cap features a lightweight and breathable design.Provides sun protection with a comfortable fit.Ideal for sports, training, and casual outdoor use.",
      stock: 40,
      sizes: ["One Size"],
      colors: ["Black", "White", "Red"],
      rating: 4.3,
    },
    {
      id: 5,
      name: "Nike Dri-FIT Shirt",
      Brand:"Nike",
      img: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/8968e343-77c6-41fe-8324-7f72ba5dcb53/M+NK+TCH+FLC+CREW.png",
      price: "$45.99",
      description: "Nike Dri-FIT Shirt is designed with moisture-wicking technology.Keeps you dry and comfortable during workouts.Perfect for gym sessions, sports activities, and daily wear.",
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
      Brand:"Adidas",
      img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/afdf5c0dcbab4cdbb851425aa22dd408_9366/essentials-oversized-fleece-hoodie.jpg",
      price: "$119.99",
      description: "Adidas Track Jacket features a classic sporty design with premium fabric.Comfortable and lightweight for daily wear.Ideal for workouts, jogging, and casual outfits.",
      stock: 15,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Green"],
      rating: 4.6,
    },
    {
      id: 7,
      name: "Adidas Ultraboost Shoes",
      Brand:"Adidas",
      img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/9d87bb33ae164cc38058a8bd00ef61d6_9366/samba-og-shoes.jpg",
      price: "$180.99",
      description: "Adidas Ultraboost Shoes provide superior cushioning and energy return.Designed for maximum comfort and performance.Perfect for running, training, and all-day wear.",
      stock: 20,
      sizes: ["7", "8", "9", "10", "11", "12"],
      colors: ["White", "Black"],
      rating: 4.8,
    },
    {
      id: 8,
      name: "Adidas Originals Hoodie",
      Brand:"Adidas",
      img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/f5a1da1295c4416788380a4df30f9102_9366/trefoil-essentials-hoodie.jpg",
      price: "$74.99",
      description: "Adidas Originals Hoodie offers a stylish look with soft fabric.Provides warmth and comfort for everyday use.Ideal for casual wear, travel, and daily activities.",
      stock: 22,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Gray", "Blue"],
      rating: 4.5,
    },
    {
      id: 9,
      name: "Adidas Baseball Cap",
      Brand:"Adidas",
      img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e45429f569344898d31622bafdf48bf_9366/mens-mexico-tournament-5-panel.jpg",
      price: "$24.99",
      description: "Adidas Baseball Cap features an adjustable fit with breathable material.Provides sun protection with a modern design.Perfect for sports, outdoor activities, and casual wear.",
      stock: 35,
      sizes: ["One Size"],
      colors: ["Black", "White", "Red", "Blue"],
      rating: 4.2,
    },
    {
      id: 10,
      name: "Adidas Training Shirt",
      Brand:"Adidas",
      img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/d7ddf314e8bc4868b87389734842c038_9366/spain-26-home-authentic-jersey.jpg",
      price: "$39.99",
      description: "Adidas Training Shirt is designed with lightweight and breathable fabric.Keeps you comfortable during workouts and training sessions.Ideal for gym, sports activities, and daily use.",
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
      Brand:"Puma",
      img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/634415/01/fnd/PNA/fmt/png/PUMATECH-Men's-Zip-Up-Hoodie",
      price: "$99.99",
      description: "Puma Windbreaker is lightweight and designed for protection against wind.Comfortable fit with breathable fabric for daily use.Ideal for outdoor activities, jogging, and casual wear.",
      stock: 16,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Gray", "Navy"],
      rating: 4.5,
    },
    {
      id: 12,
      name: "Puma Suede Classic",
      Brand:"Puma",
      img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/399781/07/mod01/fnd/PNA/fmt/png/Suede-Classic-Sneakers",
      price: "$75.99",
      description: "Puma Suede Classic Sneakers feature a timeless design with premium suede material.Provides comfort, durability, and excellent grip.Perfect for casual wear, daily use, and street style fashion.",
      stock: 24,
      sizes: ["7", "8", "9", "10", "11"],
      colors: ["Blue", "Red", "Black", "Green"],
      rating: 4.7,
    },
    {
      id: 13,
      name: "Puma Essentials Hoodie",
      Brand:"Puma",
      img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/682586/01/mod01/fnd/PNA/fmt/png/PUMA-Essentials-Men's-Zip-Up-Hoodie",
      price: "$64.99",
      description: "Puma Essentials Hoodie offers a soft and comfortable feel for everyday wear.Designed to provide warmth with breathable fabric.Ideal for casual outfits, workouts, and daily activities.",
      stock: 19,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Gray", "White"],
      rating: 4.4,
    },
    {
      id: 14,
      name: "Puma Sports Cap",
      Brand:"Puma",
      img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/927423/50/fnd/PNA/fmt/png/PUMA-Men's-Adjustable-Hat",
      price: "$27.99",
      description: "Puma Sports Cap is designed with breathable material for all-day comfort.Provides sun protection with a stylish sporty look.Perfect for sports, outdoor activities, and casual wear.",
      stock: 32,
      sizes: ["One Size"],
      colors: ["Black", "White", "Blue"],
      rating: 4.3,
    },
    {
      id: 15,
      name: "Puma Active Shirt",
      Brand:"Puma",
      img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/660101/01/mod01/fnd/PNA/fmt/png/PUMA-x-NEYMAR-Creativity-Men's-Soccer-Tee",
      price: "$42.99",
      description: "Puma Active Shirt is made with lightweight and moisture-wicking fabric.Designed for comfort during workouts and daily wear.Ideal for gym sessions, sports activities, and casual use.",
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
      Brand:"Zara",
      img: "https://static.zara.net/assets/public/5965/dc1d/cd144bedbb2c/ee2158be5e25/00840332400-e1/00840332400-e1.jpg?ts=1756994300531&w=358",
      price: "$89.99",
      description: "Zara Denim Jacket features a trendy and modern design made with premium denim fabric.Comfortable fit with durable stitching for long-lasting wear.Perfect for casual outfits, daily wear, and street style looks.",
      stock: 14,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Blue", "Black", "Light Blue"],
      rating: 4.6,
    },
    {
      id: 17,
      name: "Zara Slim Fit Jeans",
      Brand:"Zara",
      img: "https://static.zara.net/assets/public/1b7e/e849/425b43a88b15/cb7aa0ad4086/08062305407-e1/08062305407-e1.jpg?ts=1753352026320&w=358",
      price: "$59.99",
      description: "Zara Slim Fit Jeans are designed for a stylish and comfortable fit.Made with high-quality denim for flexibility and durability.Ideal for casual wear, outings, and everyday fashion.",
      stock: 27,
      sizes: ["28", "30", "32", "34", "36"],
      colors: ["Blue", "Black", "Gray"],
      rating: 4.5,
    },
    {
      id: 18,
      name: "Zara Oxford Shirt",
      Brand:"Zara",
      img: "https://static.zara.net/assets/public/980a/fe24/54844512b0ef/ac3c995acea4/01063363250-e1/01063363250-e1.jpg?ts=1758532066453&w=358",
      price: "$49.99",
      description: "Zara Oxford Shirt offers a classic and elegant look with premium cotton fabric.Breathable and comfortable for all-day wear.Perfect for formal occasions, office wear, and smart casual outfits.",
      stock: 21,
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Blue", "Pink"],
      rating: 4.4,
    },
    {
      id: 19,
      name: "Zara Wool Coat",
      Brand:"Zara",
      img: "https://static.zara.net/assets/public/96f4/fa42/9d924c38bd58/73a399124d6f/03736044700-p/03736044700-p.jpg?ts=1767958698997&w=307",
      price: "$159.99",
      description: "Zara Wool Coat provides warmth and elegance with a premium wool blend.Designed for cold weather while maintaining a stylish appearance.Ideal for winter wear, formal events, and casual layering.",
      stock: 8,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Camel", "Gray"],
      rating: 4.7,
    },
    {
      id: 20,
      name: "Zara Knit Top",
      Brand:"Zara",
      img: "https://static.zara.net/assets/public/7365/77f5/0f344477b0de/d4e38f905529/00526398807-e1/00526398807-e1.jpg?ts=1763624015449&w=358",
      price: "$39.99",
      description: "Zara Knit Top features a soft and stylish design with a comfortable fit.Lightweight fabric suitable for all-season wear.Perfect for casual wear, daily outfits, and modern styling.",
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
      Brand:"Guccu",
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1758096952/828895_XNA7G_1000_001_100_0000_Light-Soft-leather-zip-jacket.jpg",
      price: "$2,450.00",
      description: "Gucci Bomber Jacket is crafted with premium materials and signature detailing.Provides a luxurious look with a comfortable fit.Perfect for casual wear, fashion styling, and high-end streetwear.",
      stock: 5,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Navy"],
      rating: 4.9,
    },
    {
      id: 22,
      name: "Gucci Ace Sneakers",
      Brand:"Guccu",
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1689611499/760775_FACMZ_9746_001_100_0000_Light-Mens-Gucci-Ace-sneaker-with-Web.jpg",
      price: "$650.00",
      description: "Gucci Ace Sneakers offer premium comfort with iconic design.Durable sole and high-quality upper material for everyday use.Ideal for casual wear, luxury fashion, and modern street style.",
      stock: 12,
      sizes: ["7", "8", "9", "10", "11"],
      colors: ["White", "Black"],
      rating: 4.8,
    },
    {
      id: 23,
      name: "Gucci Leather Bag",
      Brand:"Guccu",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG25mWcNKr0pm6FKazzfR0e6BxwXaS4Cmi3A&s",
      price: "$420.00",
      description: "Gucci Leather Belt is made from premium leather with signature branding.Durable and stylish design suitable for all outfits.Perfect for formal wear, casual outfits, and luxury styling.",
      stock: 15,
      sizes: ["75", "80", "85", "90", "95"],
      colors: ["Black", "Brown"],
      rating: 4.7,
    },
    {
      id: 24,
      name: "Gucci Polo Shirt",
      Brand:"Guccu",
      img: "https://images.brownthomas.com/bta/2001119886_01.jpg?$pdp_zoom$",
      price: "$790.00",
      description: "Gucci Polo Shirt is crafted with premium cotton fabric for maximum comfort.Features a clean and modern design with luxury branding.Ideal for casual wear, smart outfits, and everyday fashion.",
      stock: 10,
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Black", "Navy"],
      rating: 4.6,
    },
    {
      id: 25,
      name: "Gucci GG Marmont Bag",
      Brand:"Guccu",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmSjKrrN6waoBst55e_Q1hKMuoO2dyAk0fQ&s",
      price: "$2,100.00",
      description: "Gucci GG Marmont Bag is designed with premium leather and iconic GG logo.Spacious and stylish for daily essentials.Perfect for casual outings, travel, and luxury fashion use.",
      stock: 7,
      sizes: ["One Size"],
      colors: ["Black", "Red", "Pink"],
      rating: 4.9,
    }
  ]
};

const singleProduct= products.nike.find(function (item){

return item.id==productID

}) ||products.adidas.find(function (item){

return item.id==productID

}) ||
products.puma.find(function (item){

return item.id==productID

}) || products.zara.find(function (item){

return item.id==productID

}) ||  products.gucci.find(function (item){

return item.id==productID

}) 
container.innerHTML=`
<div class="row mt-5">
            <div class="col-lg-4 col-md-12 col-12 image-section">
                <img class="img-fluid image py-4 w-100" src="${singleProduct.img}" alt="${singleProduct.name}">
            </div>
            <div class="col-lg-6 col-md-12 col-12 detail-sec">
                <h3 class="py-4" id="P-name">${singleProduct.name}</h3>
                <div id="Brand">
                   <p><strong>Brand:</strong><span> ${singleProduct.Brand}</span></p>
                </div>
                <h2 id="Price">${singleProduct.price}</h2>
                <select class="my-3">
                    <option>select size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>XLarge</option>
                </select>
                <input type="number" value="1">
                <button class="Buy-btn">Add To Cart</button>
                <div class="details">
                    <p><strong>Stock:</strong><span> ${singleProduct.stock}</span></p>
                    <p><strong>Colors:</strong><span> ${singleProduct.colors}</span></p>
                </div>
                <h4 class="mt-5 mb-3" id="p-details">Product Details</h4>
                <span>${singleProduct.description}</span>

            </div>
        </div>`
import { Product } from '../types/product';

export const mockProducts: Product[] = [
  {
    id: 1,
    title: "Premium Cotton T-Shirt",
    description: "Experience ultimate comfort with our premium cotton t-shirt. Made from 100% organic cotton, this shirt offers a soft touch and durable wear. Perfect for everyday use, it features a classic cut that flatters all body types.",
    price: 29.99,
    compareAtPrice: 39.99,
    images: [
      "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      "https://images.pexels.com/photos/5384424/pexels-photo-5384424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      "https://images.pexels.com/photos/5384425/pexels-photo-5384425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    ],
    category: "Clothing",
    tags: ["t-shirt", "cotton", "sale"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviewCount: 128
  },
  {
    id: 2,
    title: "Classic Denim Jeans",
    description: "Our classic denim jeans combine style and comfort. Crafted from high-quality denim, they feature a traditional five-pocket design with a modern slim fit. The versatile dark wash transitions effortlessly from day to night.",
    price: 59.99,
    compareAtPrice: null,
    images: [
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      "https://images.pexels.com/photos/1705723/pexels-photo-1705723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    ],
    category: "Clothing",
    tags: ["jeans", "denim", "new"],
    sizes: ["28", "30", "32", "34", "36"],
    rating: 4.7,
    reviewCount: 95
  },
  {
    id: 3,
    title: "Leather Weekend Bag",
    description: "The perfect companion for your weekend getaways. This premium leather bag features a spacious main compartment, multiple organization pockets, and durable hardware. Its timeless design ensures it will never go out of style.",
    price: 149.99,
    compareAtPrice: 199.99,
    images: [
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    ],
    category: "Accessories",
    tags: ["bag", "leather", "sale"],
    sizes: ["One Size"],
    rating: 4.8,
    reviewCount: 42
  },
  {
    id: 4,
    title: "Minimalist Watch",
    description: "Elegant simplicity meets precise timekeeping. Our minimalist watch features a clean dial with subtle hour markers, a premium leather strap, and Japanese quartz movement. Water-resistant up to 30 meters.",
    price: 89.99,
    compareAtPrice: null,
    images: [
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    ],
    category: "Accessories",
    tags: ["watch", "premium", "new"],
    sizes: ["One Size"],
    rating: 4.6,
    reviewCount: 76
  },
  {
    id: 5,
    title: "Running Sneakers",
    description: "Designed for performance and comfort, these running sneakers feature responsive cushioning, breathable mesh uppers, and a durable rubber outsole. Their lightweight construction makes every step feel effortless.",
    price: 119.99,
    compareAtPrice: 149.99,
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    ],
    category: "Shoes",
    tags: ["sneakers", "running", "sale"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    rating: 4.9,
    reviewCount: 112
  },
  {
    id: 6,
    title: "Cashmere Scarf",
    description: "Wrap yourself in luxury with our 100% cashmere scarf. Incredibly soft and warm, it's the perfect accessory for chilly days. Available in a range of timeless colors to complement any outfit.",
    price: 79.99,
    compareAtPrice: null,
    images: [
      "https://images.pexels.com/photos/45924/pexels-photo-45924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    ],
    category: "Accessories",
    tags: ["scarf", "cashmere", "premium"],
    sizes: ["One Size"],
    rating: 4.7,
    reviewCount: 58
  },
  {
    id: 7,
    title: "Wireless Headphones",
    description: "Immerse yourself in superior sound quality with our wireless headphones. Featuring active noise cancellation, 30-hour battery life, and memory foam ear cushions for extended comfort. Includes a premium carry case.",
    price: 199.99,
    compareAtPrice: 249.99,
    images: [
      "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    ],
    category: "Electronics",
    tags: ["headphones", "wireless", "sale"],
    sizes: ["One Size"],
    rating: 4.8,
    reviewCount: 203
  },
  {
    id: 8,
    title: "Leather Wallet",
    description: "Crafted from full-grain leather, our slim wallet combines functionality with classic style. It features card slots, a bill compartment, and RFID blocking technology to protect your personal information.",
    price: 49.99,
    compareAtPrice: null,
    images: [
      "https://images.pexels.com/photos/47401/pexels-photo-47401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    ],
    category: "Accessories",
    tags: ["wallet", "leather", "new"],
    sizes: ["One Size"],
    rating: 4.5,
    reviewCount: 87
  },
  {
    id: 9,
    title: "Floral Summer Dress",
    description: "Embrace the season with our light and airy floral dress. The flattering A-line silhouette and breathable fabric make it perfect for warm days. Dress it up with heels or down with sandals for versatile styling.",
    price: 69.99,
    compareAtPrice: 89.99,
    images: [
      "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      "https://images.pexels.com/photos/1143793/pexels-photo-1143793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    ],
    category: "Clothing",
    tags: ["dress", "summer", "sale"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.6,
    reviewCount: 74
  },
  {
    id: 10,
    title: "Classic Aviator Sunglasses",
    description: "Protect your eyes in style with our classic aviator sunglasses. Featuring UV400 protection lenses and a durable metal frame, they offer both fashion and function. Includes a protective case and microfiber cleaning cloth.",
    price: 129.99,
    compareAtPrice: null,
    images: [
      "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    ],
    category: "Accessories",
    tags: ["sunglasses", "premium", "new"],
    sizes: ["One Size"],
    rating: 4.7,
    reviewCount: 63
  },
  {
    id: 11,
    title: "Knit Beanie Hat",
    description: "Stay warm and stylish with our chunky knit beanie. Made from soft acrylic yarn, it provides comfort and insulation during cold weather. The classic design pairs easily with any winter outfit.",
    price: 24.99,
    compareAtPrice: 34.99,
    images: [
      "https://images.pexels.com/photos/4533327/pexels-photo-4533327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    ],
    category: "Accessories",
    tags: ["hat", "winter", "sale"],
    sizes: ["One Size"],
    rating: 4.5,
    reviewCount: 49
  },
  {
    id: 12,
    title: "Portable Bluetooth Speaker",
    description: "Take your music anywhere with our waterproof Bluetooth speaker. Delivering rich, clear sound for up to 12 hours on a single charge, it's perfect for outdoor adventures. The compact design fits easily in your bag.",
    price: 79.99,
    compareAtPrice: 99.99,
    images: [
      "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    ],
    category: "Electronics",
    tags: ["speaker", "bluetooth", "sale"],
    sizes: ["One Size"],
    rating: 4.6,
    reviewCount: 118
  }
];
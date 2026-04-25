export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  sizes: string[];
  colors: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    description: "Premium quality cotton t-shirt, perfect for everyday wear.",
    category: "men",
    image: "/white.jpg",           // ✅ PUBLIC FOLDER MEIN
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"]
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 79.99,
    description: "Modern slim fit jeans with stretch comfort.",
    category: "men",
    image: "/slim.jpg",            // ✅ PUBLIC FOLDER MEIN
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"]
  },
  {
    id: 3,
    name: "Floral Summer Dress",
    price: 89.99,
    description: "Beautiful floral print dress, perfect for summer occasions.",
    category: "women",
    image: "/floral.jpg",          // ✅ PUBLIC FOLDER MEIN
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pink", "Blue"]
  },
  {
    id: 4,
    name: "Leather Jacket",
    price: 199.99,
    description: "Classic leather jacket with a modern twist.",
    category: "women",
    image: "/li.jpg",         // ✅ PUBLIC FOLDER MEIN
    sizes: ["S", "M", "L"],
    colors: ["Black", "Brown"]
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 129.99,
    description: "Lightweight running shoes with superior cushioning.",
    category: "men",
    image: "/running.jpg",         // ✅ PUBLIC FOLDER MEIN
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Black/Red", "Blue/White"]
  }
];
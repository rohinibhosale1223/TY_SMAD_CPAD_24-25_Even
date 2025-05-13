import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Ultra HD Curved Monitor',
    description: 'Experience immersive visuals with this 34-inch curved display featuring 4K resolution and a 144Hz refresh rate.',
    price: 899.99,
    category: 'Monitors',
    imageUrl: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.8,
    inStock: true
  },
  {
    id: '2',
    name: 'Mechanical Gaming Keyboard',
    description: 'Tactile mechanical switches with customizable RGB lighting and programmable macros for the ultimate gaming experience.',
    price: 149.99,
    category: 'Peripherals',
    imageUrl: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    inStock: true
  },
  {
    id: '3',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Premium sound quality with active noise cancellation and 30-hour battery life for immersive audio experiences.',
    price: 299.99,
    category: 'Audio',
    imageUrl: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.9,
    inStock: true
  },
  {
    id: '4',
    name: 'Portable SSD Drive - 1TB',
    description: 'Ultra-fast data transfer with read/write speeds up to 1000MB/s in a compact, durable design.',
    price: 179.99,
    category: 'Storage',
    imageUrl: 'https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.6,
    inStock: true
  },
  {
    id: '5',
    name: 'Smart Home Hub',
    description: 'Control all your smart devices from one central hub with voice commands and automatic routines.',
    price: 129.99,
    category: 'Smart Home',
    imageUrl: 'https://images.pexels.com/photos/4790255/pexels-photo-4790255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.5,
    inStock: false
  },
  {
    id: '6',
    name: 'Professional Streaming Microphone',
    description: 'Studio-quality audio capture with adjustable gain, various pickup patterns, and zero-latency monitoring.',
    price: 159.99,
    category: 'Audio',
    imageUrl: 'https://images.pexels.com/photos/3761823/pexels-photo-3761823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    inStock: true
  },
];
// import '../styles/globals.css';
// import type { AppProps } from 'next/app';
// import { useState, useEffect } from 'react';
// import Navbar from './ui/Navbar';
// import { CartItem } from './lib/definitions';

// function MyApp({ Component, pageProps }: AppProps) {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   useEffect(() => {
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (id: string) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === id);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         return [...prevCart, { id, quantity: 1 }];
//       }
//     });
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <Navbar cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} />
//         <div>afdsadfgsdf</div>
//       {/* Main Content */}
//       <Component {...pageProps} cart={cart} setCart={setCart} addToCart={addToCart} />
//     </>
//   );
// }

// export default MyApp;
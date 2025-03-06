'use client'

import React, { useState, useEffect, useRef } from 'react';
import Cart from '../ui/Cart';
import Products from '../lib/products';
import { CartItem } from '../lib/definitions';

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState('0.00');
  const isInitialRender = useRef(true);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const calculateSubtotal = () => {
      const products = [...Products];
      const total = cart.reduce((total: number, cartItem: CartItem) => {
        const product = products.find(product => product.id === cartItem.id);
        if (product) {
          return total + (product.price * cartItem.quantity);
        }
        return total;
      }, 0).toFixed(2);
      setSubtotal(total);
    };

    calculateSubtotal();
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navbar */}
      <nav className="bg-yellow-600 p-4 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold px-4" style={{ fontFamily: "Cursive" }}>
          CatchFries🍟
        </h1>
      </nav>
      <h1 className="text-3xl font-bold mb-6 text-yellow-600 p-8" style={{ fontFamily: 'Cursive' }}>Shopping Cart</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Cart cart={cart} setCart={setCart} />
        </div>
        <div className="col-span-1 bg-white p-4 rounded shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Cursive' }}>Subtotal</h2>
            <p className="text-xl mb-4">${subtotal}</p>
          </div>
          <button className="bg-yellow-600 text-white font-bold py-2 px-4 rounded w-full mt-4">Checkout</button>
        </div>
      </div>
    </div>
  );
}

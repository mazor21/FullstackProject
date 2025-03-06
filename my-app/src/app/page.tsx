"use client";

import { ProductCard } from "./ui/product";
import products from "../app/lib/products";
import { CartItem } from "../app/lib/definitions";
import Navbar from "./ui/Navbar";
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const [cart, setCart] = useState<CartItem[]>([]);
      const isInitialRender = useRef(true);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
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

    const addToCart = (id: string) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { id, quantity: 1 }];
            }
        });
    };

    return (
        <div>
            {/* Navbar */}
            <Navbar
                cartItemCount={cart.reduce(
                    (total, item) => total + item.quantity,
                    0
                )}
            />
            {/* Main Content */}
            <main className="min-h-screen bg-gray-100 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            addToCart={() => addToCart(product.id)}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

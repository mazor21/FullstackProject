"use client";

import { useState, useEffect } from "react";
import { ProductCard } from "./ui/product";
import products from "../app/lib/products";
import { CartItem } from "../app/lib/definitions";

export default function Home() {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
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
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-yellow-600 p-4 flex justify-between items-center text-white">
                <h1
                    className="text-2xl font-bold px-4"
                    style={{ fontFamily: "Cursive" }}
                >
                    CatchFries🍟
                </h1>
                <div className="relative">
                    <button className="bg-yellow-800 px-4 py-2 rounded-lg">
                        Cart (
                        {cart.reduce((total, item) => total + item.quantity, 0)}
                        )
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="p-6">
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

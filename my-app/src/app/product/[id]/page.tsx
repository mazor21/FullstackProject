"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import products from "../../lib/products";
import Navbar from "@/app/ui/Navbar";
import { CartItem, Product } from "@/app/lib/definitions";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {

  const { id } = React.use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const isInitialRender = useRef(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = products.find((product) => product.id.toString() === id);
      setProduct(product || null);
    };

    fetchProduct();
  }, [id]);

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
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id: string, quantity: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevCart, { id, quantity: 1 }];
      }
    });
  };

  const defaultImage = "/fries/fried-chicken.jpg";

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      {/* Navbar */}
      <Navbar
        cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)}
      />
      {/* Main Content */}
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-2xl mx-auto p-4 flex">
          <div className="w-1/2">
            <Image
              className="w-full"
              src={product.image || defaultImage}
              alt={product.name}
              width={500}
              height={500}
              onError={(e) => (e.currentTarget.src = defaultImage)}
            />
          </div>
          <div className="w-1/2 px-6 py-4">
            <div className="font-bold text-2xl mb-2 text-yellow-500 " style={{ fontFamily: " cursive" }}>{product.name}</div>
            <p className="text-gray-700 text-base">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-700 text-base mt-4">
              {product.description}
            </p>
            <div className="mt-4">
              <label
                htmlFor="quantity"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                defaultValue="1"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                const quantityInput = document.getElementById('quantity') as HTMLInputElement;
                const quantity = parseInt(quantityInput.value, 10);

                if (isNaN(quantity) || quantity < 1 || !Number.isInteger(quantity) || quantityInput.value.includes('.')) {
                  alert("Please enter a valid integer quantity.");
                  return;
                }

                addToCart(product.id, quantity);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;

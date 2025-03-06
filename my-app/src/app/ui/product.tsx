import React from "react";
import Image from "next/image";
import { ProductCardProps } from "../lib/definitions";

export const ProductCard: React.FC<ProductCardProps> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    id,
    image,
    name,
    price,
    addToCart,
}) => {
    const defaultImage = "/fries/fried-chicken.jpg";

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
            <Image
                className="w-full"
                src={image || defaultImage}
                alt={name}
                width={500}
                height={500}
                onError={(e) => (e.currentTarget.src = defaultImage)}
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">${price.toFixed(2)}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={addToCart}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

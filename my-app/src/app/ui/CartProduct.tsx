import React from "react";
import Image from "next/image";
import { CartProductProps } from "../lib/definitions";

const CartProduct: React.FC<CartProductProps> = ({
    image,
    name,
    price,
    quantity,
    onIncrement,
    onDecrement,
    onRemove,
}) => {
    const defaultImage = "/fries/ff1.jpg";

    return (
        <div className="flex items-center p-4 border-b">
            <Image src={image} alt={defaultImage} width={100} height={100} />
            <div className="ml-4 flex-1">
                <h2 className="text-xl font-bold" style={{ fontFamily: 'Cursive', color: '#FFA500' }}>{name}</h2>
                <div className="flex items-center mt-2">
                    <button
                        className="bg-gray-300 px-2 py-1 rounded"
                        onClick={onDecrement}
                    >
                        -
                    </button>
                    <span className="mx-2 text-black">{quantity}</span>
                    <button
                        className="bg-gray-300 px-2 py-1 rounded"
                        onClick={onIncrement}
                    >
                        +
                    </button>
                </div>
                <p className="mt-2 text-black">Total: ${(price * quantity).toFixed(2)}</p>
                <button
                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
                    onClick={onRemove}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartProduct;

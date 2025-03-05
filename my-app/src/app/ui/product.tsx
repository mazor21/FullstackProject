import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
    image: string;
    name: string;
    price: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ image, name, price }) => {
    const defaultImage = "/fries/ff1.jpg";

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
            <Image className="w-full" src={image || defaultImage} alt={name} width={500} height={500} onError={(e) => (e.currentTarget.src = defaultImage)} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2" style={{ fontFamily: 'Cursive', color: 'black' }}>{name}</div>
                <p className="text-gray-700 text-base" style={{ fontFamily: 'Cursive', color: 'black' }}>${price.toFixed(2)}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};
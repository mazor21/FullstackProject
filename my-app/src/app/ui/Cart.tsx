import React from 'react';
import CartProduct from './CartProduct';
import products from '../lib/products';
import { CartItem } from '../lib/definitions';

interface CartProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const Cart: React.FC<CartProps> = ({ cart, setCart }) => {
  const handleIncrement = (id: string) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id: string) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleRemove = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const getProductDetails = (id: string) => {
    return products.find(product => product.id === id);
  };

  return (
    <div>
      {cart.map((cartItem, index) => {
        const product = getProductDetails(cartItem.id);
        if (!product) return null;
        return (
          <CartProduct
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            quantity={cartItem.quantity}
            onIncrement={() => handleIncrement(cartItem.id)}
            onDecrement={() => handleDecrement(cartItem.id)}
            onRemove={() => handleRemove(cartItem.id)}
          />
        );
      })}
    </div>
  );
};

export default Cart;

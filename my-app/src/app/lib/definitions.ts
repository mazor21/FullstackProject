export type Product = {
    id: string;
    image: string;
    name: string;
    price: number;
    description: string | null;
};

export type ProductCardProps = {
    id: string;
    image: string;
    name: string;
    price: number;
    addToCart: () => void;
};

export type CartItem = {
    id: string;
    quantity: number;
};

export type CartProductProps = {
    image: string;
    name: string;
    price: number;
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
    onRemove: () => void;
};

export type Invoice = {
    id: string;
    customer_id: string;
    amount: number;
    date: string;
    // In TypeScript, this is called a string union type.
    // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
    status: "pending" | "paid";
};

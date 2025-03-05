export type Product = {
    id: string;
    image: string;
    name: string;
    price: number;
    description: string|null;
  };

  export type productCardProps = {
    image: string;
    name: string;
    price: number;
  }

export type Invoice = {
    id: string;
    customer_id: string;
    amount: number;
    date: string;
    // In TypeScript, this is called a string union type.
    // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
    status: 'pending' | 'paid';
  };
import React from 'react';
import Link from 'next/link';


interface NavbarProps {
  cartItemCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemCount }) => {
  return (
    <nav className="bg-yellow-600 p-4 flex justify-between items-center text-white">
      <Link href="/">
        <h1 className="text-2xl font-bold px-4" style={{ fontFamily: "Cursive" }}>
          CatchFries🍟
        </h1>
      </Link>
      <div className="relative">
        <Link href="/cart">
          <button className="bg-yellow-800 px-4 py-2 rounded-lg">
            Cart ({cartItemCount})
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
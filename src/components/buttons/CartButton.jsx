'use client';

import { CartContext } from '@/context/CartProvider';
import React, { use, useState } from 'react';

const CartButton = ({ food }) => {
    const [inCart, setInCart] = useState(false);

    // React 19 / Next.js 15 'use()' Hook to consume context
    const context = use(CartContext);
    const addToCart = context?.addToCart || (() => { });

    const handleAddToCart = () => {
        addToCart(food);
        setInCart(true);
    };

    return (
        <button
            onClick={handleAddToCart}
            disabled={inCart}
            className={`w-full py-2.5 px-4 text-sm font-semibold rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${inCart
                    ? "bg-emerald-100 text-emerald-700 border border-emerald-300 cursor-not-allowed opacity-90"
                    : "btn-primary"
                }`}
        >
            <span>{inCart ? "✓ Added" : "🛒 Add to Cart"}</span>
        </button>
    );
};

export default CartButton;
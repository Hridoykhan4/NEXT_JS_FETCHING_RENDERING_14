import FoodCard from "@/components/cards/FoodCard";
import React from "react";
import CartItems from "./CartItems";
import InputSearch from "@/components/InputSearch";

// Professional API Fetching Function
const getFoods = async () => {
    try {
        const res = await fetch(
            "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
            { next: { revalidate: 10 } } // ISR caching strategy (revalidate every 10 seconds)
        );

        if (!res.ok) throw new Error("Failed to fetch foods");

        const data = await res.json();

        // Filtering on server response safely
        return data.foods?.filter((f) => f.category !== "Pork") || [];
    } catch (error) {
        console.error("Error fetching foods:", error);
        return [];
    }
};

export default async function FoodsPage({searchParams}) {
    const {search = ""} = await searchParams;
    console.log(search);
    const foods = await getFoods();

    return (
        <div className="space-y-6">
            {/* Title Header */}
            <div className="flex flex-col gap-1">
                <h2 className="text-3xl sm:text-4xl font-bold">
                    Total <span className="text-[var(--primary)]">{foods.length}</span> Foods Found
                </h2>
                <p className="text-stone-500 text-sm">
                    Explore our delicious items prepared fresh for you.
                </p>
            </div>

            {/* Search Bar Container */}
            <div>
                <InputSearch />
            </div>

            {/* Main Grid Layout (Foods + Cart Sidebar) */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">

                {/* Food Items Section (Takes 3 Columns on Large Screens) */}
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {foods.length > 0 ? (
                        foods.map((food) => (
                            <FoodCard key={food.id || food._id} food={food} />
                        ))
                    ) : (
                        <div className="col-span-full py-12 text-center text-stone-500 bg-[var(--card)] border border-[var(--border)] rounded-2xl">
                            No food items found at the moment.
                        </div>
                    )}
                </div>

                {/* Sidebar Cart Section (Takes 1 Column, Sticky) */}
                <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-5 shadow-sm sticky top-24">
                    <h3 className="text-xl font-bold mb-3">Cart Items</h3>
                    <hr className="border-[var(--border)] mb-4" />
                    <CartItems />
                </div>

            </div>
        </div>
    );
}
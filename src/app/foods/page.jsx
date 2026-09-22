import FoodCard from "@/components/cards/FoodCard";
import React from "react";
import CartItems from "./CartItems";
import InputSearch from "@/components/InputSearch";


// metadata
export const metadata = {
    title: 'Foods',
    // description: "Experience the finest food & ordering experience in Noakhali",
    description: 'Experience finest beefs, chicken, dessert items in the land of Noakhali'
}


// Professional API Fetching Function
const getFoods = async (search = "") => {
    try {
        const res = await fetch(
            `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${encodeURIComponent(search)}`,
            { next: { revalidate: 10 } } // ISR caching strategy
            // , একবার কোনো ইউজার সাইটে ঢুকে পেজ রেন্ডার করলে Next.js সার্ভার ডাটা ক্যাশ (Cache) করে নেয়।
        );

        if (!res.ok) throw new Error("Failed to fetch foods");

        const data = await res.json();

        // Safely filter response on server
        return data.foods?.filter((f) => f.category !== "Pork") || [];
    } catch (error) {
        console.error("Error fetching foods:", error);
        return [];
    }
};

export default async function FoodsPage({ searchParams }) {
    // Await searchParams as required in Next.js 15+
    const resolvedParams = await searchParams;
    const searchQuery = resolvedParams?.search || "";

    const foods = await getFoods(searchQuery);

    return (
        <div className="space-y-6">
            {/* Title Header */}
            <div className="flex flex-col gap-1">
                <h2 className="text-3xl sm:text-4xl font-bold">
                    Total <span className="text-[var(--primary)]">{foods.length}</span> Foods Found
                </h2>
                <p className="text-stone-500 text-sm">
                    {searchQuery
                        ? `Showing results for "${searchQuery}"`
                        : "Explore our delicious items prepared fresh for you."}
                </p>
            </div>

            {/* Search Input Section */}
            <div>
                <InputSearch />
            </div>

            {/* Main Grid Layout (Foods + Cart Sidebar) */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">

                {/* Food Items Section */}
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {foods.length > 0 ? (
                        foods.map((food) => (
                            <FoodCard key={food.id || food._id} food={food} />
                        ))
                    ) : (
                        <div className="col-span-full py-12 text-center text-stone-500 bg-[var(--card)] border border-[var(--border)] rounded-2xl">
                            No food items found for &quot;{searchQuery}&quot;. Try searching for something else.
                        </div>
                    )}
                </div>

                {/* Sidebar Cart Section */}
                <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-5 shadow-sm sticky top-24">
                    <h3 className="text-xl font-bold mb-3">Cart Items</h3>
                    <hr className="border-[var(--border)] mb-4" />
                    <CartItems />
                </div>

            </div>
        </div>
    );
}
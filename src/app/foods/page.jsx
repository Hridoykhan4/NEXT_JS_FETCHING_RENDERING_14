import FoodCard from '@/components/cards/FoodCard';
import React from 'react'

const getFoods = async () => {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random`);
    const data = await res.json();
    return data.foods.filter(f => f.category !== 'Pork') || []
}

export default async function FoodsPage() {
    const foods = await getFoods()
    return (
        <div><h2 className={`text-4xl font-bold`}>
            Total <span className="text-yellow-500">{foods.length} </span> Foods
            Found
        </h2>
            <div className="my-4">
                {/* <InputSearch></InputSearch> */}
            </div>

            <div className="flex gap-5">
                <div className=" flex-1 grid my-5 grid-cols-3 gap-5">
                    {foods.map((food) => (
                        <FoodCard key={food.id} food={food}></FoodCard>
                    ))}
                </div>
                <div className="w-[250px] border-2 rounded-xl p-4">
                    <h2 className="text-2xl font-bold">Cart Items</h2> <hr />
                    {/* <CartItems></CartItems> */}
                </div>
            </div></div>
    )
}

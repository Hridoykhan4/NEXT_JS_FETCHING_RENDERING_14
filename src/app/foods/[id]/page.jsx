import Image from 'next/image';
import React from 'react';


export const generateStaticParams = () => {
    return [{ id: '52904' }, { id: '52998' }, { id: '53071' }]
}


// Professional API Fetching with Error Handling
const getSingleFood = async (id) => {
    try {
        const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`, {
            next: { revalidate: 60 }, // Cache revalidation
        });

        if (!res.ok) return null;

        const data = await res.json();
        return data.details || null;
    } catch (error) {
        console.error("Error fetching food details:", error);
        return null;
    }
};

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const food = await getSingleFood(id);
    return {
        title: food.title,
        generator: 'Next.js',
        applicationName: 'Yantun khaijan',
        referrer: 'origin-when-cross-origin',
        keywords: ['Next.js', 'React', 'JavaScript'],
        authors: [{ name: 'Hridoy Khan' }, { name: 'Hridoy', url: 'https://nextjs.org' }],
        creator: 'Md. Toyob Uddin Hridoy',
        publisher: 'Sebastian Markbåge',
    }
}


const FoodDetailsPage = async ({ params }) => {
    const { id } = await params;
    const food = await getSingleFood(id);

    // Early Return for Not Found State
    if (!food || !food.title) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-3">
                <span className="text-5xl">🍔</span>
                <h2 className="text-2xl font-bold">Food Not Found</h2>
                <p className="text-stone-500">The item you are looking for does not exist or has been removed.</p>
            </div>
        );
    }

    const { title, foodImg, price, video, category, area } = food;

    return (
        <div className="max-w-4xl mx-auto py-6">
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-6 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Food Image with Next.js Image Component */}
                <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-stone-100">
                    <Image
                        src={foodImg}
                        alt={title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </div>

                {/* Details Content */}
                <div className="flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                        {/* Category & Area Badges */}
                        <div className="flex items-center gap-2">
                            {category && <span className="badge">{category}</span>}
                            {area && (
                                <span className="bg-stone-100 text-stone-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                                    {area}
                                </span>
                            )}
                        </div>

                        {/* Food Title */}
                        <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>

                        {/* Price */}
                        <div className="text-3xl font-extrabold text-[var(--primary)]">
                            ৳{price}
                        </div>
                    </div>

                    {/* Action Buttons using Global Styles */}
                    <div className="flex items-center gap-4 pt-2">
                        <button className="btn-primary flex-1 py-3.5 text-base">
                            Add to Cart
                        </button>

                        {video && (
                            <a
                                href={video}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary flex-1 py-3.5 text-base text-center"
                            >
                                Watch Recipe
                            </a>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FoodDetailsPage;
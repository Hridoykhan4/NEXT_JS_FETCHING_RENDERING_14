import Link from "next/link";
import Image from "next/image";
import CartButton from "../buttons/CartButton";

export default function FoodCard({ food }) {
    const { title, foodImg, category, price, id } = food;

    return (
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">

            {/* Food Image Container */}
            <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-stone-100">
                <Image
                    src={foodImg}
                    alt={title || "Food item"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                />
                {category && (
                    <div className="absolute top-3 left-3">
                        <span className="badge shadow-sm">{category}</span>
                    </div>
                )}
            </div>

            {/* Content Area */}
            <div className="mt-4 flex flex-col flex-1 justify-between gap-3">
                <div>
                    <h3 className="text-xl font-bold text-stone-900 line-clamp-1">
                        {title}
                    </h3>
                </div>

                {/* Price & Actions */}
                <div className="space-y-3 pt-2 border-t border-[var(--border)]">
                    <div className="text-2xl font-extrabold text-[var(--primary)]">
                        ৳{price}
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Cart Button */}
                        <div className="">
                            <CartButton food={food} />
                        </div>

                        {/* Details Link using Global Secondary Button */}
                        <Link
                            href={`/foods/${id}`}
                            className="btn-secondary text-sm py-2.5 px-4 text-center justify-center flex-1"
                        >
                            Details
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}
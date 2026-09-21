"use client";

import { useState } from "react";
import Image from "next/image";

export default function ReviewCard({ review }) {
    const { user, email, photo, rating = 5, review: text, likes = [], date } = review;

    const [likeCount, setLikeCount] = useState(likes.length);
    const [isLiked, setIsLiked] = useState(false);

    // Strict Mode Safe Handler
    const handleLike = () => {
        const nextIsLiked = !isLiked;
        setIsLiked(nextIsLiked);
        setLikeCount((prev) => (nextIsLiked ? prev + 1 : prev - 1));
    };

    // Safe Rating Calculation
    const numericRating = Math.min(Math.max(Number(rating) || 0, 0), 5);
    const fullStars = Math.floor(numericRating);
    const emptyStars = 5 - fullStars;

    return (
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-6 shadow-sm flex flex-col justify-between gap-4 hover:shadow-md transition-shadow">

            {/* Header: User Info */}
            <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-stone-100 border border-[var(--border)] shrink-0">
                    <Image
                        src={photo || "/avatar-placeholder.png"}
                        alt={user || "User"}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="overflow-hidden">
                    <h3 className="font-bold text-stone-900 truncate">{user}</h3>
                    <p className="text-stone-500 text-xs truncate">{email}</p>
                </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-amber-500 text-lg">
                {Array.from({ length: fullStars }).map((_, i) => (
                    <span key={`full-${i}`}>★</span>
                ))}
                {Array.from({ length: emptyStars }).map((_, i) => (
                    <span key={`empty-${i}`} className="text-stone-300">
                        ★
                    </span>
                ))}
            </div>

            {/* Review Text */}
            <p className="text-stone-700 text-sm leading-relaxed">{text}</p>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-[var(--border)] pt-4 mt-auto">
                <span className="text-xs text-stone-400">
                    {date ? new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Recently"}
                </span>

                {/* Like Button */}
                <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all duration-200 ${isLiked
                        ? "bg-red-50 text-[var(--primary)] border border-red-200"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200 border border-transparent"
                        }`}
                >
                    <span>{isLiked ? "❤️" : "🤍"}</span>
                    <span>{likeCount} {likeCount === 1 ? "like" : "likes"}</span>
                </button>
            </div>

        </div>
    );
}
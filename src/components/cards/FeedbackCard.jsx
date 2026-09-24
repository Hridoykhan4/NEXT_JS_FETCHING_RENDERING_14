"use client";

import React from "react";

const FeedbackCard = ({ feedback }) => {
    const { message, date, _id } = feedback;

    // Safe Date Formatting
    const formattedDate = date
        ? new Date(date).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        })
        : "Recently";

    return (
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            {/* Message & Timestamp */}
            <div className="space-y-1 flex-1">
                <p className="text-stone-900 font-medium text-base leading-relaxed">
                    &quot;{message}&quot;
                </p>
                <p className="text-stone-400 text-xs font-mono">
                    {formattedDate}
                </p>
            </div>

            {/* Action Buttons using Global Styles */}
            <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                <button
                    onClick={() => console.log("Update", _id)}
                    className="px-4 py-1.5 text-xs font-semibold rounded-xl bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer"
                >
                    Update
                </button>

                <button
                    onClick={() => console.log("Delete", _id)}
                    className="px-4 py-1.5 text-xs font-semibold rounded-xl bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition-colors cursor-pointer"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default FeedbackCard;
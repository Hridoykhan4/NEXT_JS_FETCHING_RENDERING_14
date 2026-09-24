import { getFeedback } from "@/actions/server/feedback";
import FeedbackCard from "@/components/cards/FeedbackCard";
import Link from "next/link";
import React from "react";

export const metadata = {
    title: "Feedbacks",
    description: "Read customer feedback or share your dining experience with us.",
};

const FeedbackPage = async () => {
    const feedback = (await getFeedback()) || [];

    return (
        <div className="space-y-6 app-container">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border)] pb-5">
                <div>
                    <h1 className="text-3xl font-bold">
                        Customer <span className="text-[var(--primary)]">Feedbacks</span>
                    </h1>
                    <p className="text-stone-500 text-sm mt-1">
                        Total {feedback.length} {feedback.length === 1 ? "feedback" : "feedbacks"} received
                    </p>
                </div>

                {/* Global Primary Add Button */}
                <Link href="/feedback/add" className="btn-primary w-fit text-sm py-2.5 px-5">
                    + Add Feedback
                </Link>
            </div>

            {/* Feedbacks List */}
            <div className="space-y-4">
                {feedback.length > 0 ? (
                    feedback.map((fd) => (
                        <FeedbackCard key={fd._id || fd.id} feedback={fd} />
                    ))
                ) : (
                    <div className="py-16 text-center text-stone-500 bg-[var(--card)] border border-[var(--border)] rounded-3xl">
                        <span className="text-4xl block mb-2">💬</span>
                        <p className="font-semibold text-lg">No feedback found yet.</p>
                        <p className="text-sm">Be the first one to share your feedback!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeedbackPage;
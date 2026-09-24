"use client";

import { postFeedback } from "@/actions/server/feedback";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FeedbackForm = () => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsSubmitting(true);

        const form = e.target;
        const message = form.message.value.trim();

        if (!message) {
            setError("Please write something before submitting.");
            setIsSubmitting(false);
            return;
        }

        try {
            const res = await postFeedback(message);
            if (res?.error) {
                setError(res.error || "Failed to submit feedback. Try again.");
            } else {
                form.reset();
                router.push("/feedback");
                router.refresh(); // Server Data Revalidate/Refresh
            }
        } catch (err) {
            console.error("Error submitting feedback:", err);
            setError("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Textarea Input */}
            <div className="space-y-2">
                <textarea
                    required
                    name="message"
                    rows={6}
                    placeholder="Write your feedback here..."
                    className="w-full p-4 bg-[var(--background)] border border-[var(--border)] rounded-2xl text-stone-900 text-sm focus:outline-none focus:border-[var(--primary)] transition-all resize-none"
                    disabled={isSubmitting}
                ></textarea>
            </div>

            {/* Error Message Display */}
            {error && (
                <p className="text-xs text-red-500 font-semibold text-center">{error}</p>
            )}

            {/* Divider */}
            <hr className="border-[var(--border)]" />

            {/* Submit Action Button */}
            <div className="flex justify-center">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full sm:w-auto px-8 py-3 text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            <span>Submitting...</span>
                        </>
                    ) : (
                        <span>Submit Feedback</span>
                    )}
                </button>
            </div>
        </form>
    );
};

export default FeedbackForm;
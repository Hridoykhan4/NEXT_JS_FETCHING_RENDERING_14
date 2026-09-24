import FeedbackForm from '@/components/forms/FeedbackForm';
import React from 'react';


export const metadata = {
    title: "Add Feedback",
    description: "Share your thoughts & dining experience with us"
}


const AddFeedback = () => {
    return (
        <div className="max-w-2xl mx-auto py-8">
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">

                {/* Page Title */}
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold">
                        Share Your <span className="text-[var(--primary)]">Feedback</span>
                    </h1>
                    <p className="text-stone-500 text-sm">
                        We value your thoughts to make our food and service even better.
                    </p>
                </div>

                {/* Client Form */}
                <FeedbackForm />

            </div>
        </div>
    );
};

export default AddFeedback;
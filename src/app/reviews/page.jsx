import React from 'react';
import ReviewPage from './ReviewPage';


export const metadata = {
    title: {
        // title.absolute ব্যবহার করার কারণ হলো Next.js-এর Root Layout-এ সেট করা টাইটেল টেমপ্লেটকে (Title Template) বাইপাস করা বা অমান্য করা।
        absolute: "Our Satisfied Users"
    },
    // title: '',
    description: "Best foods in Noakhali"
}


const AllReviews = () => {
    return (
        <div>
            <ReviewPage></ReviewPage>
        </div>
    );
};

export default AllReviews;
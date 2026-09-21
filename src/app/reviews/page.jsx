'use client'
import React, { useEffect, useState } from 'react'
import ReviewLoading from './ReviewLoading';
import ReviewCard from '@/components/cards/ReviewCard';

export default function ReviewPage() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://taxi-kitchen-api.vercel.app/api/v1/reviews`).then(res => res.json()).then(data => {
            setReviews(data.reviews)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <ReviewLoading></ReviewLoading>;
    }

    /* {
      id: 1,
      user: 'Arman Hossain',
      email: 'arman@mail.com',
      photo: 'https://randomuser.me/api/portraits/men/12.jpg',
      rating: 5,
      review: 
        'Food was absolutely delicious! বিশেষ করে গ্রিল চিকেনটা অসাধারণ লেগেছে। মশলার ব্যালান্স এত পারফেক্ট ছিল যে খেতে খেতে মনটাই ভালো হয়ে যায়। রেস্টুরেন্টের পরিবেশও দারুণ শান্ত ছিল, তাই পুরো অভিজ্ঞতাটাই খুব উপভোগ করেছি।',
      likes: [ 'sara@mail.com', 'john@mail.com' ],
      date: '2025-01-12T10:30:00Z'
    }, */

    return (
        <div> <h2 className="text-4xl font-bold">
            Total <span className="text-yellow-500">{reviews.length} </span> Reviews
            Found
        </h2>
            <div className="grid my-5 grid-cols-3 gap-5">
                {reviews.map((rev) => (
                    <ReviewCard review={rev} key={rev.id}></ReviewCard>
                ))}
            </div></div>
    )
}

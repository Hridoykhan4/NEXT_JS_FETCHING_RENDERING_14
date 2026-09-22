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

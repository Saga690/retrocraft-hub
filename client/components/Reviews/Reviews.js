import React from 'react'
import styles from './Reviews.module.css'
import Review from '../Review/Review.js'
import { useQuery } from '@tanstack/react-query'
import newRequest from '@/utils/newRequest';

const Reviews = ({ gigId }) => {

    const { isLoading, error, data } = useQuery({
        queryKey: ['reviews'],
        queryFn: () =>
            newRequest.get(`/reviews/${gigId}`).then(res => {
                return res.data;
            }),
    })

    console.log("data is", data);

    return (
        <div className={styles.reviews}>
            <h2>Reviews</h2>
            {isLoading ? "loading..." : error ? "Something went wrong!" : data.map(review => (
                <Review key={review._id} review={review} />
            ))}
        </div>
    )
}


export default Reviews
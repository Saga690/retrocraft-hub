import React from 'react'
import styles from './Reviews.module.css'
import Review from '../Review/Review.js'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import newRequest from '@/utils/newRequest';

const Reviews = ({ gigId }) => {

    const queryClient = useQueryClient();

    const { isLoading, error, data } = useQuery({
        queryKey: ['reviews'],
        queryFn: () =>
            newRequest.get(`/reviews/${gigId}`).then(res => {
                return res.data;
            }),
    })

    const mutation = useMutation({
        mutationFn: (review) => {
            return newRequest.post("/reviews", review);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["reviews"])
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const desc = e.target[0].value;
        const star = e.target[1].value;
        // console.log({ gigId, desc, star });
        mutation.mutate({ gigId, desc, star });
    }

    return (
        <div className={styles.reviews}>
            <h2>Reviews</h2>
            {isLoading ? "loading..." : error ? "Something went wrong!" : data.map(review => (
                <Review key={review._id} review={review} />
            ))}
            <div className={styles.add}>
                <h3>Add a review</h3>
                <form action="" className={styles.inputForm} onSubmit={handleSubmit}>
                    <input type="text"  className={styles.input} placeholder='what do you think?' />
                    <select name="" id="" className={styles.select}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <button className={styles.formButton}>Send</button>
                </form>
            </div>
        </div>
    )
}


export default Reviews
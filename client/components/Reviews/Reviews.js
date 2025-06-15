import React, { useState } from 'react'
import styles from './Reviews.module.css'
import Review from '../Review/Review.js'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import newRequest from '@/utils/newRequest';

const Reviews = ({ gigId }) => {
    const [errorMsg, setErrorMsg] = useState("");
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
        onError: (error) => {
            // console.error("Review error:", error);
            const msg = error?.response?.data?.message || error?.response?.data;
            if (msg && msg.toLowerCase().includes("seller") && msg.toLowerCase().includes("review")) {
                setErrorMsg("Sellers can't create a review.");
            } else if (msg && msg.toLowerCase().includes("already created a review")) {
                setErrorMsg("You have already created a review for this gig!");
            } else if (msg) {
                setErrorMsg(msg);
            } else {
                setErrorMsg("An error occurred. Please try again.");
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["reviews"]);
            setErrorMsg("");
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMsg("");
        const desc = e.target[0].value;
        const star = e.target[1].value;
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
                {errorMsg && <div style={{color: 'red', marginBottom: '0.5rem'}}>{errorMsg}</div>}
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
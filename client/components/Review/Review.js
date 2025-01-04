import React from 'react'
import styles from './Review.module.css'
import { useQuery } from '@tanstack/react-query'
import newRequest from '@/utils/newRequest';

const Review = ({ review }) => {

    const { isLoading, error, data } = useQuery({
        queryKey: ['reviewUser'],
        queryFn: () =>
            newRequest.get(`/users/${review.userId}`).then(res => {
                return res.data;
            }),
    })

    return (
        <div className={styles.ritem}>
            {isLoading ? "loading..." : error ? "Something went wrong!" : <div className={styles.user}>
                <img className={styles.rpp} src={data.img || "https://www.webinarleads4you.com/wp-content/uploads/2017/02/no-avatar-350x350-300x300.jpg"} alt="" />
                <div className={styles.info}>
                    <span>{data.username}</span>
                    <div className={styles.country}>
                        <span>{data.country}</span>
                    </div>
                </div>
            </div>
            }
            <div className={styles.stars}>
                {Array(review.star).fill().map((item, i) => (
                    <img key={i} src="/star.png" alt="" width={14} />
                ))}
                <span className={styles.span1}>{review.star}</span>
            </div>
            <p className={styles.p}>{review.desc}</p>
            <div className={styles.helpful}>
                <span>Helpful?</span>
                <img src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Like-icon.png" alt="" width={18} />
                <span>Yes</span>
                <img src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Unlike-icon.png" alt="" width={18} />
                <span>No</span>
            </div>
        </div>
    )
}

export default Review
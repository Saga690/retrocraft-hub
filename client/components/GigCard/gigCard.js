import React from 'react'
import styles from './GigCard.module.css'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query';
import newRequest from '@/utils/newRequest';

const gigCard = ({ item }) => {

    const { isLoading, error, data} = useQuery({
        queryKey: ['gigUser'],
        queryFn: () =>
          newRequest.get(`/users/${item.userId}`).then(res => {
            return res.data;
          })
      })

    return (
        <Link href="/gig" className={styles.link}>
            <div className={styles.gigCard}>
                <img className={styles.img1} src={item.cover} alt="" />
                <div className={styles.info}>
                    {isLoading ? "loading..." : error ? "Something went wrong!" : <div className={styles.user}>
                        <img className={styles.pp} src={data.img || "https://th.bing.com/th/id/OIP.pdgwLL8oxjSs9n4AV66x5wHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} alt="" />
                        <span>{data.username}</span>
                    </div>}
                    <p className={styles.p}>{item.desc}</p>
                    <div className={styles.star}>
                        <img className={styles.simg} src="/star.png" alt="" />
                        <span className={styles.sstar}>{! isNaN(item.totalStars / item.starNumber) && Math.round(item.totalStars / item.starNumber)}</span>
                    </div>
                </div>
                <hr className={styles.hr} />
                <div className={styles.details}>
                    <img className={styles.img2} src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" alt="" />
                    <div>
                        <span className={styles.pspan}>STARTING AT</span>
                        <h2 className={styles.ph2}>${item.price}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default gigCard
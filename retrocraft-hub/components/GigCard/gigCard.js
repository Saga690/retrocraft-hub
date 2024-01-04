import React from 'react'
import styles from './GigCard.module.css'
import Link from 'next/link'

const gigCard = ({ item }) => {
    return (
        <Link href="/gig" className={styles.link}>
            <div className={styles.gigCard}>
                <img className={styles.img1} src={item.img} alt="" />
                <div className={styles.info}>
                    <div className={styles.user}>
                        <img className={styles.pp} src={item.pp} alt="" />
                        <span>{item.username}</span>
                    </div>
                    <p className={styles.p}>{item.desc}</p>
                    <div className={styles.star}>
                        <img className={styles.simg} src="/star.png" alt="" />
                        <span className={styles.sstar}>{item.star}</span>
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
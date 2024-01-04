import React from 'react'
import styles from './CatCard.module.css'
import { cards } from '@/pages/api/data';
import Link from 'next/link';

const catCard = ({ item }) => {
    return (
        <Link href="/gigs?cat=design">
            <div className={styles.catCard}>
                <img className={styles.img} src={item.img} alt="" />
                <span className={styles.desc}>{item.desc}</span>
                <span className={styles.title}>{item.title}</span>
            </div>
        </Link>
    )
}

export default catCard
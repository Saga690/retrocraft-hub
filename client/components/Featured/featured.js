import React, { useState } from 'react'
import styles from './Featured.module.css'
import { useRouter } from 'next/router'

const featured = () => {

    const [input, setInput] = useState("")

    const router = useRouter()

    const handleSubmit = () => {
        router.push(`/gigs?search=${input}`)
    }

    return (
        <div className={styles.featured}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1 className={styles.h1}>Find the perfect services for your Cinematic Venture</h1>
                    <div className={styles.search}>
                        <div className={styles.searchInput}>
                            <img src="/search.jpg" alt="" width={16} />
                            <input className={styles.input} type="text" placeholder="Try making a new film" onChange={(e) => setInput(e.target.value)} />
                        </div>
                        <button className={styles.btn} onClick={handleSubmit}>Search</button>
                    </div>
                    <div className={styles.popular}>
                        <span>Popular:</span>
                        <button className={styles.button}>Set Design</button>
                        <button className={styles.button}>Graphics</button>
                        <button className={styles.button}>Poster Design</button>
                        <button className={styles.button}>AI Services</button>
                    </div>
                </div>
                <div className={styles.right}>
                    <img className={styles.img} src="/man.png" alt=""  />
                </div>
            </div>
        </div>
    )
}

export default featured
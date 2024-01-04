import React from 'react'
import styles from './TrustedBy.module.css'

const trustedBy = () => {
    return (
        <div className={styles.trustedBy}>
            <div className={styles.container}>
                <span>Trusted By:</span>
                <span>Warner Bros.</span>
                <span>Walt Disney</span>
                <span>Netflix</span>
                <span>Eros International</span>
                <span>Yashraj Films</span>
            </div>
        </div>
    )
}

export default trustedBy
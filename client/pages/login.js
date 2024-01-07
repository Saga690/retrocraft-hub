import React from 'react'
import styles from '@/styles/Login.module.css'

const login = () => {
    return (
        <div className={styles.login}>
            <form className={styles.form}>
                <h1 className={styles.h1}>Sign In</h1>
                <label className={styles.label} htmlFor="">Username</label>
                <input className={styles.input} type="text" name="username" placeholder="johndoe" />
                <label className={styles.label} htmlFor="">Password</label>
                <input className={styles.input} name="password" type="password" />
                <button className={styles.btn} type="submit">Login</button>
            </form>
        </div>
    )
}

export default login
import React from 'react';
import styles from '@/styles/Register.module.css';

const register = () => {
    return (
        <div className={styles.register}>
            <form className={styles.form}>
                <div className={styles.left}>
                    <h1 className={styles.h1}>Create a new account</h1>
                    <label className={styles.label} htmlFor="">Username</label>
                    <input className={styles.input} name="username" type="text" placeholder="johndoe" />
                    <label className={styles.label} htmlFor="">Email</label>
                    <input className={styles.input} name="email" type="email" placeholder="email" />
                    <label className={styles.label} htmlFor="">Password</label>
                    <input className={styles.input} name="password" type="password" />
                    <label className={styles.label} htmlFor="">Profile Picture</label>
                    <input className={styles.input} type="file" />
                    <label className={styles.label} htmlFor="">Country</label>
                    <input className={styles.input} name="country" type="text" placeholder="Usa" />
                    <button className={styles.btn} type="submit">Register</button>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.h1}>I am a film crew</h1>
                    <div className={styles.toggle}>
                        <label className={styles.label} htmlFor="">Activate crew account</label>
                        <label className={`${styles.label} ${styles.switch}`}>
                            <input className={styles.input} type="checkbox" />
                            <span className={`${styles.slider} ${styles.round}`}></span>
                        </label>
                    </div>
                    <label className={styles.label} htmlFor="">Phone Number</label>
                    <input className={styles.input} name="phone" type="text" placeholder="+1 234 567 89" />
                    <label className={styles.label} htmlFor="">Description</label>
                    <textarea className={styles.textarea} placeholder="A short description of yourself" name="desc" id="" cols="30" rows="10"></textarea>
                </div>
            </form>
        </div>
    )
}

export default register
import React, { useState } from 'react';
import styles from '@/styles/Register.module.css';

const register = () => {

    const [file, setFile] = useState(null);
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        img: "",
        country: "",
        isSeller: false,
        desc: "",
    });

    console.log(user);

    const handleChange = (e) => {
        setUser(prev => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleSeller = (e) => {
        setUser(prev => {
            return { ...prev, isSeller: e.target.checked };
        });
    };

    return (
        <div className={styles.register}>
            <form className={styles.form}>
                <div className={styles.left}>
                    <h1 className={styles.h1}>Create a new account</h1>
                    <label className={styles.label} htmlFor="">Username</label>
                    <input className={styles.input} name="username" type="text" placeholder="johndoe" onChange={handleChange} />
                    <label className={styles.label} htmlFor="">Email</label>
                    <input className={styles.input} name="email" type="email" placeholder="email" onChange={handleChange} />
                    <label className={styles.label} htmlFor="">Password</label>
                    <input className={styles.input} name="password" type="password" onChange={handleChange} />
                    <label className={styles.label} htmlFor="">Profile Picture</label>
                    <input className={styles.input} type="file" onChange={(e) => setFile(e.target.files[0])} />
                    <label className={styles.label} htmlFor="">Country</label>
                    <input className={styles.input} name="country" type="text" placeholder="Usa" onChange={handleChange} />
                    <button className={styles.btn} type="submit">Register</button>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.h1}>I am a film crew</h1>
                    <div className={styles.toggle}>
                        <label className={styles.label} htmlFor="">Activate crew account</label>
                        <label className={`${styles.label} ${styles.switch}`}>
                            <input className={styles.input} type="checkbox" onChange={handleSeller} />
                            <span className={`${styles.slider} ${styles.round}`}></span>
                        </label>
                    </div>
                    <label className={styles.label} htmlFor="">Phone Number</label>
                    <input className={styles.input} name="phone" type="text" placeholder="+1 234 567 89" onChange={handleChange} />
                    <label className={styles.label} htmlFor="">Description</label>
                    <textarea className={styles.textarea} placeholder="A short description of yourself" name="desc" id="" cols="30" rows="10" onChange={handleChange}></textarea>
                </div>
            </form>
        </div>
    )
}

export default register
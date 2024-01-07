import React, { useState } from 'react'
import styles from '@/styles/Login.module.css'
import axios from 'axios';

const login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8800/api/auth/login", { username, password, }, { withCredentials: true });
        } catch (err) {
            setError(err);
        }
    }
    return (
        <div className={styles.login}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.h1}>Sign In</h1>
                <label className={styles.label} htmlFor="">Username</label>
                <input className={styles.input} type="text" name="username" placeholder="johndoe" onChange={e => setUsername(e.target.value)} />
                <label className={styles.label} htmlFor="">Password</label>
                <input className={styles.input} name="password" type="password" onChange={e => setPassword(e.target.value)} />
                <button className={styles.btn} type="submit">Login</button>
            </form>
        </div>
    )
}

export default login
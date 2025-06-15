import React, { useState } from 'react';
import styles from '@/styles/Register.module.css';
import upload from '@/utils/upload';
import newRequest from '@/utils/newRequest';
import { useRouter } from 'next/router';

const register = () => {

    const router = useRouter();

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
    const [error, setError] = useState("");

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!user.username || !user.email || !user.password || !user.country) {
            setError("* Username, Email, Password and Country are required fields.");
            return;
        }
        setError("");
        const url = await upload(file);

        try {
            await newRequest.post("/auth/register", {
                ...user,
                img: url,
            })
            router.push("/login");
        } catch (error) {
            const errMsg = error?.response?.data || "Registration failed. Please try again.";
            if (typeof errMsg === "string") {
                if (errMsg.toLowerCase().includes("username")) {
                    setError("User with same username exists, please choose a different username.");
                } else if (errMsg.toLowerCase().includes("email")) {
                    setError("User with same email already exists, please log in.");
                } else {
                    setError(errMsg);
                }
            } else {
                setError("Registration failed. Please try again.");
            }
        }
    }

    return (
        <div className={styles.register}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.left}>
                    <h1 className={styles.h1}>Create a new account</h1>
                    {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
                    <label className={styles.label} htmlFor="">Username*</label>
                    <input className={styles.input} name="username" type="text" placeholder="johndoe" onChange={handleChange} />
                    <label className={styles.label} htmlFor="">Email*</label>
                    <input className={styles.input} name="email" type="email" placeholder="email" onChange={handleChange} />
                    <label className={styles.label} htmlFor="">Password*</label>
                    <input className={styles.input} name="password" type="password" onChange={handleChange} />
                    <label className={styles.label} htmlFor="">Profile Picture</label>
                    <input className={styles.input} type="file" onChange={(e) => setFile(e.target.files[0])} />
                    <label className={styles.label} htmlFor="">Country*</label>
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
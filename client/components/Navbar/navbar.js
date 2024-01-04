import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navbar = () => {

    const router = useRouter();

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return () => {
            window.removeEventListener("scroll", isActive);
        }
    },[]);

    const currentUser = {
        id: 1,
        username: "Saga",
        isSeller: true,
    }

    // const currentUser = null;

    return (
        <div className={active || router.pathname !== '/' ? styles.navbaractive : styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.link}>
                <div className={styles.logo}>RetroCraft.</div>
                </Link>
                <div className={styles.links}>
                    <span>Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser?.username && <span>Sign In</span>}
                    {!currentUser && <button className={active || router.pathname !== '/' ? styles.btna : styles.btn}>Join</button>}
                    {currentUser && (
                        <div className={styles.user} onClick={() => setOpen(!open)}>
                            <img className={styles.img} src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="" />
                            <span>{currentUser.username}</span>
                            { open && <div className={styles.options}>
                                {
                                    currentUser?.isSeller && (
                                        <>
                                            <Link className={styles.link} href="/mygigs">Gigs</Link>
                                            <Link className={styles.link} href="/add">Add New Gig</Link>
                                        </>
                                    )
                                }
                                <Link className={styles.link} href="/offers">Offers</Link>
                                <Link className={styles.link} href="/messages">Messages</Link>
                                <Link className={styles.link} href="/">Logout</Link>
                            </div>}
                        </div>
                    )}
                </div>
            </div>
            {(active || router.pathname !== '/') && (<>
                <hr className={styles.hr} />
                <div className={styles.menu}>
                    <Link className={styles.link} href="/">Cinematography</Link>
                    <Link className={styles.link} href="/">Set Design</Link>
                    <Link className={styles.link} href="/">Acting</Link>
                    <Link className={styles.link} href="/">Writing & Translation</Link>
                    <Link className={styles.link} href="/">Animation</Link>
                    <Link className={styles.link} href="/">Photography</Link>
                    <Link className={styles.link} href="/">Music & Audio</Link>
                </div>
                <hr className={styles.hr} />
            </>)}
        </div>
    )
}

export default navbar
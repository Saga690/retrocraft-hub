import React from 'react'
import Link from 'next/link'
import styles from '@/styles/MyGigs.module.css'

const MyGigs = () => {

    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true,
    };

    return (
        <div className={styles.myGigs}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Gigs</h1>
                    <Link href="/add">
                        <button className={styles.btn}>Add New Gig</button>
                    </Link>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.trh}>
                            <th className={styles.th}>Image</th>
                            <th className={styles.th}>Title</th>
                            <th className={styles.th}>Price</th>
                            <th className={styles.th}>{currentUser.isSeller ? "Producer" : "Seller"}</th>
                            <th className={styles.th}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={styles.tr}>
                            <td>
                                <img className={styles.img} src="https://images.unsplash.com/photo-1611403119860-57c4937ef987?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXNpYW4lMjBtYW58ZW58MHx8MHx8fDA%3D" alt="" />
                            </td>
                            <td>Gig 1</td>
                            <td>88k INR</td>
                            <td>John Doe</td>
                            <td className={styles.actions}>
                                <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/12559/12559741.png" alt="" />
                                <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="" />
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <img className={styles.img} src="https://images.unsplash.com/photo-1608649672403-3609a75eae18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2xkJTIwbWFufGVufDB8fDB8fHww" alt="" />
                            </td>
                            <td>Gig 2</td>
                            <td>88k INR</td>
                            <td>John Doe</td>
                            <td className={styles.actions}>
                                <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/12559/12559741.png" alt="" />
                                <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="" />
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <img className={styles.img} src="https://images.unsplash.com/photo-1570158268183-d296b2892211?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D" alt="" />
                            </td>
                            <td>Gig 3</td>
                            <td>88k INR</td>
                            <td>John Doe</td>
                            <td className={styles.actions}>
                                <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/12559/12559741.png" alt="" />
                                <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="" />
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <img className={styles.img} src="https://images.unsplash.com/photo-1535320485706-44d43b919500?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG9sZCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            </td>
                            <td>Gig 4</td>
                            <td>88k INR</td>
                            <td>John Doe</td>
                            <td className={styles.actions}>
                                <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/12559/12559741.png" alt="" />
                                <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="" />
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <img className={styles.img} src="https://images.unsplash.com/photo-1622151834677-70f982c9adef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8fHww" alt="" />
                            </td>
                            <td>Gig 5</td>
                            <td>8k8 INR</td>
                            <td>John Doe</td>
                            <td className={styles.actions}>
                                <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/12559/12559741.png" alt="" />
                                <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyGigs
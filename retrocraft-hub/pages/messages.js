import React from 'react'
import styles from '@/styles/Messages.module.css'
import Link from 'next/link';

const Messages = () => {

    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true,
    };

    const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error ut cum molestiae perferendis illo dolorum illum facilis unde quasi"

    return (
        <div className={styles.messages}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Messages</h1>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.tr}>
                            <th className={styles.th}>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
                            <th className={styles.th}>Last Message</th>
                            <th className={styles.th}>Date</th>
                            <th className={styles.th}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={`${styles.tr} ${styles.active}`}>
                            <td className={styles.td}>John Doe</td>
                            <td className={styles.td}><Link className={styles.link} href="/message">{message.substring(0,100)}...</Link></td>
                            <td className={styles.td}>1 hour ago</td>
                            <td className={styles.td}>
                                <button className={styles.btn}>Mark as Read</button>
                            </td>
                        </tr>
                        <tr className={`${styles.tr} ${styles.active}`}>
                            <td className={styles.td}>John Doe</td>
                            <td className={styles.td}><Link className={styles.link} href="/message">{message.substring(0,100)}...</Link></td>
                            <td className={styles.td}>2 hours ago</td>
                            <td className={styles.td}>
                                <button className={styles.btn}>Mark as Read</button>
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.td}>John Doe</td>
                            <td className={styles.td}><Link className={styles.link} href="/message">{message.substring(0,100)}...</Link></td>
                            <td className={styles.td}>7 hours ago</td>
                            <td className={styles.td}>
                                {/* <button className={styles.btn}>Mark as Read</button> */}
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.td}>John Doe</td>
                            <td className={styles.td}><Link className={styles.link} href="/message">{message.substring(0,100)}...</Link></td>
                            <td className={styles.td}>1 day ago</td>
                            <td className={styles.td}>
                                {/* <button className={styles.btn}>Mark as Read</button> */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Messages
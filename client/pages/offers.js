import React from 'react'
import styles from '@/styles/Offers.module.css'

const Offers = () => {

    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true,
    };

    return (
        <div className={styles.myGigs}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Offers</h1>
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
                                <img className={styles.img} src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWFuJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
                            </td>
                            <td>Gig 1</td>
                            <td>88k INR</td>
                            <td>Jessica Ardern</td>
                            <td className={styles.actions}>
                                <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/12559/12559741.png" alt="" />
                                <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="" />
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <img className={styles.img} src="https://images.unsplash.com/photo-1502767882403-636aee14f873?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
                            </td>
                            <td>Gig 2</td>
                            <td>88k INR</td>
                            <td>Jessica Ardern</td>
                            <td className={styles.actions}>
                                <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/12559/12559741.png" alt="" />
                                <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="" />
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <img className={styles.img} src="https://images.unsplash.com/photo-1485230977869-27a4eaf8c0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWFuJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
                            </td>
                            <td>Gig 3</td>
                            <td>88k INR</td>
                            <td>Jessica Ardern</td>
                            <td className={styles.actions}>
                                <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/12559/12559741.png" alt="" />
                                <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="" />
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <img className={styles.img} src="https://images.unsplash.com/photo-1485811661309-ab85183a729c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWFuJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
                            </td>
                            <td>Gig 4</td>
                            <td>88k INR</td>
                            <td>Jessica Ardern</td>
                            <td className={styles.actions}>
                                <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/12559/12559741.png" alt="" />
                                <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="" />
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <img className={styles.img} src="https://images.unsplash.com/photo-1493321384838-70c5a85ba487?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWFuJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
                            </td>
                            <td>Gig 5</td>
                            <td>88k INR</td>
                            <td>Jessica Ardern</td>
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

export default Offers
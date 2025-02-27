import React, { useEffect, useState } from 'react'
import styles from '@/styles/Offers.module.css'
import { useQuery } from '@tanstack/react-query';
import newRequest from '@/utils/newRequest';
import { useRouter } from 'next/router';

const Offers = () => {

    const router = useRouter();

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const userloc = JSON.parse(localStorage.getItem("currentUser"));
        setCurrentUser(userloc);
    }, [])

    const { isLoading, error, data } = useQuery({
        queryKey: ['offers'],
        queryFn: () =>
            newRequest.get(`/offers`).then(res => {
                return res.data;
            }),
    })

    const handleContact = async (offer) => {
        const sellerId = offer.sellerId;
        const buyerId = offer.buyerId;
        const id = sellerId + buyerId;
        try {
            const res = await newRequest.get(`/conversations/single/${id}`);
            router.push(`/message/${res.data.id}`);
        } catch (error) {
            if (error.response.status === 404) {
                await newRequest.post(`/conversations`, { to: currentUser.isSeller ? buyerId : sellerId });
            }
            router.push(`/message/${res.data.id}`);
        }
    }

    return (
        <div className={styles.myGigs}>
            {isLoading ? "loading..." : error ? "Something went wrong!" : <div className={styles.container}>
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
                        {data.map((offer) => (
                            <tr className={styles.tr} key={offer._id}>
                                <td>
                                    <img className={styles.img} src={offer.img} alt="" />
                                </td>
                                <td>{offer.title}</td>
                                <td>{offer.price} INR</td>
                                <td>{currentUser.isSeller ? offer.buyerId : offer.sellerId}</td>
                                <td className={styles.actions}>
                                    <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/12559/12559741.png" alt="" onClick={() => handleContact(offer)} />
                                    <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
        </div>
    )
}

export default Offers
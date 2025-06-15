import React, { useEffect, useState } from 'react'
import styles from '@/styles/Offers.module.css'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '@/utils/newRequest';
import { useRouter } from 'next/router';

const Offers = () => {

    const router = useRouter();
    const queryClient = useQueryClient();

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const userloc = JSON.parse(localStorage.getItem("currentUser"));
        setCurrentUser(userloc);
        // Invalidate offers cache on mount to always show latest
        queryClient.invalidateQueries(["offers"]);
    }, [queryClient])

    const { isLoading, error, data, refetch } = useQuery({
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
                const createRes = await newRequest.post(`/conversations`, { to: currentUser.isSeller ? buyerId : sellerId });
                router.push(`/message/${createRes.data.id}`);
            } else {
                console.error(error);
            }
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
                            <OfferRow offer={offer} currentUser={currentUser} handleContact={handleContact} key={offer._id} />
                        ))}
                    </tbody>
                </table>
            </div>}
        </div>
    )
}

function OfferRow({ offer, currentUser, handleContact }) {
    const [otherUserName, setOtherUserName] = useState("");
    useEffect(() => {
        const otherUserId = currentUser.isSeller ? offer.buyerId : offer.sellerId;
        if (!otherUserId) return;
        let ignore = false;
        newRequest.get(`/users/${otherUserId}`)
            .then(res => { if (!ignore) setOtherUserName(res.data.username); })
            .catch(() => { if (!ignore) setOtherUserName(""); });
        return () => { ignore = true; };
    }, [offer, currentUser]);
    const otherUserId = currentUser.isSeller ? offer.buyerId : offer.sellerId;
    return (
        <tr className={styles.tr}>
            <td>
                <img className={styles.img} src={offer.img} alt="" />
            </td>
            <td>{offer.title}</td>
            <td>{offer.price} INR</td>
            <td>{otherUserName || otherUserId}</td>
            <td className={styles.actions}>
                <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/12559/12559741.png" alt="" onClick={() => handleContact(offer)} />
                <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="" />
            </td>
        </tr>
    );
}

export default Offers
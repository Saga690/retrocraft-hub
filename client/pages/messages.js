import React, { useEffect, useState } from 'react'
import styles from '@/styles/Messages.module.css'
import Link from 'next/link';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '@/utils/newRequest';
import moment from 'moment';

const Messages = () => {

    const queryClient = useQueryClient();

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const userloc = JSON.parse(localStorage.getItem("currentUser"));
        setCurrentUser(userloc);
    }, [])

    const { isLoading, error, data } = useQuery({
        queryKey: ['conversations'],
        queryFn: () =>
            newRequest.get(`/conversations`).then(res => {
                return res.data;
            }),
    })

    const mutation = useMutation({
        mutationFn: (id) => {
            return newRequest.put(`/conversations/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["conversations"])
        }
    })

    const handleRead = (id) => {
        mutation.mutate(id);
    }

    const [usernames, setUsernames] = useState({});
    const fetchUsername = async (userId) => {
        if (!userId || usernames[userId]) return;
        try {
            const res = await newRequest.get(`/users/${userId}`);
            setUsernames(prev => ({ ...prev, [userId]: res.data.username }));
        } catch {
            setUsernames(prev => ({ ...prev, [userId]: userId }));
        }
    };

    return (
        <div className={styles.messages}>
            {isLoading ? "loading..." : error ? "Something went wrong!" : <div className={styles.container}>
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
                        {data.map((c) => {
                            const otherUserId = currentUser?.isSeller ? c.buyerId : c.sellerId;
                            useEffect(() => { fetchUsername(otherUserId); }, [otherUserId]);
                            return (
                                <tr className={`${styles.tr} ${((currentUser?.isSeller && !c.readBySeller) || (!currentUser?.isSeller && !c.readByBuyer)) ? styles.active : ''}`} key={c.id} >
                                    <td className={styles.td}>{usernames[otherUserId] || otherUserId}</td>
                                    <td className={styles.td}><Link className={styles.link} href={`/message/${c.id}`}>{c?.lastMessage?.substring(0, 100)}...</Link></td>
                                    <td className={styles.td}>{moment(c.updatedAt).fromNow()}</td>
                                    <td className={styles.td}>
                                        {((currentUser?.isSeller && !c.readBySeller) || (!currentUser?.isSeller && !c.readByBuyer)) && (<button className={styles.btn} onClick={() => handleRead(c.id)}>Mark as Read</button>)}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>}
        </div>
    )
}

export default Messages
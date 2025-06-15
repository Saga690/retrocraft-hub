import React, { useEffect, useState } from 'react'
import styles from '@/styles/Message.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '@/utils/newRequest';

const Message = () => {

    const router = useRouter();
    const id = router.query.id;

    const queryClient = useQueryClient();

    const [currentUser, setCurrentUser] = useState(null);
    const [userImages, setUserImages] = useState({});

    useEffect(() => {
        const userloc = JSON.parse(localStorage.getItem("currentUser"));
        setCurrentUser(userloc);
    }, [])

    useEffect(() => {
        if (!currentUser || !id) return;
        // Fetch conversation to get both user IDs
        newRequest.get(`/conversations/single/${id}`)
            .then(res => {
                const convo = res.data;
                const userIds = [convo.sellerId, convo.buyerId];
                userIds.forEach(async (uid) => {
                    if (!uid || userImages[uid]) return;
                    try {
                        const ures = await newRequest.get(`/users/${uid}`);
                        setUserImages(prev => ({ ...prev, [uid]: ures.data.img || "https://www.webinarleads4you.com/wp-content/uploads/2017/02/no-avatar-350x350-300x300.jpg" }));
                    } catch {
                        setUserImages(prev => ({ ...prev, [uid]: "https://www.webinarleads4you.com/wp-content/uploads/2017/02/no-avatar-350x350-300x300.jpg" }));
                    }
                });
            });
    }, [currentUser, id]);

    const { isLoading, error, data } = useQuery({
        queryKey: ['messages'],
        queryFn: () =>
            newRequest.get(`/messages/${id}`).then(res => {
                return res.data;
            }),
    })

    const mutation = useMutation({
        mutationFn: (message) => {
            return newRequest.post(`/messages`, message);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["messages"])
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({
            conversationId: id,
            desc: e.target[0].value,
        });
        e.target[0].value = "";
    }

    return (
        <div className={styles.message}>
            <div className={styles.container}>
                <span className={styles.loc}><Link className={styles.link} href="/messages">MESSAGES</Link> &gt; JOHN DOE &gt;</span>
                {isLoading ? "loading..." : error ? "Something went wrong!" : <div className={styles.messages}>
                    {data.map((m) => (
                        <div className={`${styles.item} ${m.userId === currentUser._id && styles.owner}`} key={m._id}>
                            <img className={styles.img} src={userImages[m.userId] || "https://www.webinarleads4you.com/wp-content/uploads/2017/02/no-avatar-350x350-300x300.jpg"} alt="" />
                            <p className={styles.p}>
                                {m.desc}
                            </p>
                        </div>
                    ))}
                </div>}
                <hr className={styles.hr} />
                <form className={styles.write} onSubmit={handleSubmit}>
                    <textarea className={styles.textarea} name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
                    <button className={styles.btn} type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Message
import React from 'react'
import Link from 'next/link'
import styles from '@/styles/MyGigs.module.css'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import newRequest from '@/utils/newRequest'

// Get current user synchronously from localStorage
const currentUser = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("currentUser")) : null;

const MyGigs = () => {

    const queryClient = useQueryClient();

    const { isLoading, error, data } = useQuery({
        queryKey: ['myGigs'],
        queryFn: () =>
            newRequest.get(`/gigs?userId=${currentUser?._id}`).then(res => {
                return res.data;
            }),
    })

    const mutation = useMutation({
        mutationFn: (id) => {
            return newRequest.delete(`/gigs/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["myGigs"])
        }
    })

    const handleDelete = (id) => {
        mutation.mutate(id);
    }   

    return (
        <div className={styles.myGigs}>
            {isLoading ? "loading..." : error ? "an error occurred" : <div className={styles.container}>
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
                            <th className={styles.th}>{currentUser?.isSeller ? "Producer" : "Seller"}</th>
                            <th className={styles.th}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map(gig => (
                            <tr className={styles.tr} key={gig._id}>
                                <td>
                                    <img className={styles.img} src={gig.cover} alt="" />
                                </td>
                                <td>{gig.title}</td>
                                <td>{gig.price} INR</td>
                                <td>John Doe</td>
                                <td className={styles.actions}>
                                    <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/12559/12559741.png" alt="" />
                                    <img className={styles.imgDel} src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="" onClick={() => handleDelete(gig._id)} />
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>}
        </div>
    )
}

export default MyGigs
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import newRequest from '@/utils/newRequest';

const success = () => {

    const router = useRouter();
    // console.log(router.query.payment_intent);

    const payment_intent = router.query.payment_intent;

    useEffect(() => {
        const makeRequest = async () => {
            try {
                await newRequest.put("/offers", { payment_intent });
                setTimeout(() => {
                    router.push("/offers");
                }, 5000)
            } catch (error) {
                console.log(error);
            }
        }
        makeRequest();
    }, [])

    return (
        <div>Payment successful. You will be redirected to the home page. Please do not close this page.</div>
    )
}

export default success
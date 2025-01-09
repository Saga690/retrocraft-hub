import React, { useEffect, useState } from 'react'
import styles from '@/styles/Pay.module.css'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import newRequest from '@/utils/newRequest'
import { useRouter } from 'next/router'
import CheckoutForm from '@/components/CheckoutForm/CheckoutForm'

const stripePromise = loadStripe("pk_test_51Qf4HpG0vT0TFLMGNLpbEwtdMK501umVI2KEpDVBCSn2GhFDCTH4eaHHbXo8PQQVkvJdds5VOzaxSXjheb5ubbyh00LI44ddts")

const pay = () => {

  const [clientSecret, setClientSecret] = useState("");

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    if (!id) return; 
    console.log(id);

    const makeRequest = async () => {
      try {
        const res = await newRequest.post(`/offers/create-payment-intent/${id}`);
        setClientSecret(res.data.client_secret);
        // console.log("Client Secret:", clientSecret);
      } catch (error) {
        console.error("Error creating payment intent:", error);
      }
    };

    makeRequest();
  }, [id]);

  const appearance = {
    theme: 'stripe',
  }

  const options = {
    clientSecret,
    appearance,
  }

  return (
    <div className={styles.pay}>
      {
        clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )
      }
    </div>
  )
}

export default pay
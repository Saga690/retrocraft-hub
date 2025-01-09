import createError from "../utils/createError.js";
import Offer from "../models/offer.model.js";
import Gig from "../models/gig.model.js";
import Stripe from "stripe";



export const getOffers = async (req, res, next) => {

    try {

        const offers = await Offer.find({
            ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
            isCompleted: true
        });
        res.status(200).send(offers);

    } catch (error) {
        next(error);
    }

}



export const intent = async (req, res, next) => {

    const stripe = new Stripe(
        process.env.STRIPE_SECRET
    );

    const gig = await Gig.findById(req.params.id);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: gig.price * 100,
        currency: "usd",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    const newOffer = new Offer({
        gigId: gig._id,
        img: gig.cover,
        title: gig.title,
        buyerId: req.userId,
        sellerId: gig.userId,
        price: gig.price,
        payment_intent: paymentIntent.id,
    })

    await newOffer.save();
    res.status(201).send({
        client_secret: paymentIntent.client_secret,
    });

}
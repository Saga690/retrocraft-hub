import createError from "../utils/createError.js";
import Offer from "../models/offer.model.js";
import Gig from "../models/gig.model.js";

export const createOffer = async (req, res, next) => {

    try {

        const gig = await Gig.findById(req.params.gigId);

        const newOffer = new Offer({
            gigId: gig._id,
            img: gig.cover,
            title: gig.title,
            buyerId: req.userId,
            sellerId: gig.userId,
            price: gig.price,
            payment_intent: "temporary",
        })

        await newOffer.save();
        res.status(201).send(newOffer);

    } catch (error) {
        next(error);
    }

}


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
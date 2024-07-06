import {Events} from "../models/eventsSchema.js";

export const createEvent = async (req, res, next) => {
    console.log(req.body);
    const {events} = req.body;

    try{
        if(!events){
            return next ("Please fill Full Form", 400);
        }
        await Events.create({events});
        res.status(200).json({
            success: true,
            message: "Event Created Successfully"
        })
    }catch (err){
        next(err)
    }
};

export const getAllEvents = async (req, res, next) => {
    try{
        const event = await Events.find();
        res.status(200).json({
            success: true,
            event,
        })
    }catch (err){
        next(err)
    }
};
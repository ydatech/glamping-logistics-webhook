import { Router, type Request, type Response } from "express";
import { BookingSchema } from "../schemas/booking.schema.js";
import { calculateGear } from "../services/inventory.js";
import { sendDispatchMessage } from "../services/notifier.js";

const router = Router();

router.post("/webhook/booking",async (req : Request, res: Response)=>{
    const parsed = BookingSchema.safeParse(req.body);

    if(!parsed.success){
        return res.status(400).json({
            error: "Invalid payload",
            details: parsed.error.flatten()
        })
    }

    const {BookingID,GuestCount, EventDuration, EventDate} = parsed.data;

    try{
        const gear = calculateGear(GuestCount, EventDuration);

        await sendDispatchMessage(
            process.env.SLACK_INCOMMING_WEBHOOK_URL!,
            BookingID,
            EventDate,
            gear
        )

        res.status(200).json({
            status: "Dispatch order sent"
        })
    }catch{
 res.status(200).json({
            status: "Dispatch failed"
        })
    }

})


export default router;
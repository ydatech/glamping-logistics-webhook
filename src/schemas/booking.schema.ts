import z from "zod";

export const BookingSchema = z.object({
    BookingID: z.string().min(1),
    GuestCount: z.number().int().positive(),
    EventDuration:z.number().int().positive(),
    EventDate: z.string().regex(
        /^\d{4}-\d{2}-\d{2}$/,
        "EventDate must be YYYY-MM-DD"
    )
})

export type BookingPayload = z.infer<typeof BookingSchema>
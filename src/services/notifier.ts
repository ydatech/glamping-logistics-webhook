import axios from "axios";

export async function sendDispatchMessage(
    webhookUrl: string,
    bookingId : string,
    eventDate: string,
    gear: Record<string, number>
){

    const items = Object.entries(gear).map(([name,qty])=>`• ${name} : ${qty}`).join("\n");
    await axios.post(webhookUrl,{
        text : `Warehouse Dispatch Order
Booking ID: ${bookingId}
Event Date: ${eventDate}

Required Gear:
${items}
        `
    })
}
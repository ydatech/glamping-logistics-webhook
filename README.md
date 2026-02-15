# Glamping Logistics - Automated Gear Dispatch Webhook

This project is a Node.js + Express + TypeScript webhook service designed to bridge a booking platform with warehouse operations for luxury glamping events.

## Tech Stack
* Node.js
* TypeScript
* Express
* tsx (hot reload & fast dev runtime)
* Zod (runtime schema validation)
* Axios (outbound webhook integration (Slack))


## Setup and Run Dev Server
1. Install dependencies
```bash
npm install
```
3. Set Environment Varaibles
Create `.env` file based on the example:
```bash
PORT=3000
SLACK_INCOMMING_WEBHOOK_URL=https://hooks.slack.com/services/xxx/xxxxx
```
2. Run the development server with hot reload
```bash
npm run dev
```

## Webhook Endpoint

`POST /webhook/booking`
Receives booking data from a simulated booking platform.

Expected Payload Schema
```json
{
    "BookingID":"string",
    "GuestCount": number,
    "EventDuration":number,
    "EventDate":"YYYY-MM-DD"
}
```

## cURL Testing

Test Payload `test-payload.json`
```json
{
    "BookingID":"GLAMP-2026-001",
    "GuestCount": 6,
    "EventDuration":4,
    "EventDate":"2026-03-12"
}
```

cURL command
```bash
curl -X POST http://localhost:3000/webhook/booking \
  -H "Content-Type: application/json" \
  -d @test-payload.json
```


## Render Deployment Demo
You can access the deployment of this project here:
[https://glamping-logistics-webhook.onrender.com/](https://glamping-logistics-webhook.onrender.com/)
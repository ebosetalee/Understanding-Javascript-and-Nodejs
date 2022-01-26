import twilio from "twilio";
import { config } from "dotenv";

config({ path: ".env" });

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const sendSms = async data => {
    // ensure phone number has +234
    const recipient =
        data.phone.substring(0, 3) == "234"
            ? `+${data.phone}`
            : data.phone.charAt(0) == "0"
            ? "+234" + data.phone.slice(1)
            : "+234" + data.phone;

    const msg = await client.messages.create({
        from: process.env.TWILIO_FROM,
        to: recipient,
        body: data.body,
    });
    console.log(recipient);
    return msg;
};

const Sms = {
    sendSms,
};

export default Sms;

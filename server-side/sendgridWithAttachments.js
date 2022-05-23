import sgMail from "@sendgrid/mail";
import axios from "axios";
import mime from "mime-types";
import { fileNameFrom } from "./googleapi.js";
// import Notification from "../models/notification.js";
// import User from "../models/user.js";

const createBuffer = async file => {
    const result = await axios({ url: file, method: "GET", responseType: "arraybuffer" });

    return Buffer.from(result.data, "binary").toString("base64");
};

const sendgridMail = async data => {
    const sendgrid_key = process.env.SENDGRID;
    sgMail.setApiKey(sendgrid_key);

    const msg = {
        to: data.email,
        from: process.env.SENDGRID_SENDER_ID,
        subject: data.subject,
        html: data.html,
    };
    if (data.attachments) {
        msg.attachments = [
            {
                content: await createBuffer(data.attachments),
                filename: fileNameFrom(data.attachments),
                type: mime.lookup(data.attachments),
                disposition: "attachment",
            },
        ];
    }

    //create notification
    // const user = await User.findOne({ email: data.email }).select("_id");
    // if (!user) {
    //     throw { error: true, message: `User with email: ${data.email} not available` };
    // }
    // await Notification.create({
    //     user: user._id,
    //     message: data.html,
    //     title: data.subject,
    //     seen: false,
    //     type: "Email Notification",
    // });

    return await sgMail.send(msg);
};


const Emails = { sendgridMail };

export default Emails;

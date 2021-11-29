import { google } from "googleapis";
import { config } from "dotenv";
import mime from "mime-types";

config({ path: ".env" });

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;

const client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

const drive = google.drive({ version: "v3", auth: client });

// upload the file
export async function uploadFile(name, file) {
    const response = await drive.files.create({
        requestBody: {
            name, //file name
            mimeType: mime.lookup(file),
        },
        media: {
            mimeType: mime.lookup(file),
            body: file,
        },
    });
    // return the response from the request
    return response.data;
}

// generate web content and view url
export async function generatePublicUrl(fileId) {
    //change file permisions to public.
    await drive.permissions.create({
        fileId,
        requestBody: {
            role: "reader",
            type: "anyone",
        },
    });

    //obtain the webview and webcontent links
    const result = await drive.files.get({
        fileId: fileId,
        fields: "webViewLink, webContentLink",
    });
    return result.data;
}

//delete file
export async function deleteFile(url) {
    const fileId = fileIdFrom(url);
    const response = await drive.files.delete({
        fileId, // file id
    });
    return response.status;
}

// get file id from url or id
function fileIdFrom(url) {
    var parts = url.match(/\/d\/(.+)\//);
    if (parts == null || parts.length < 2) {
        return url;
    } else {
        return parts[1];
    }
}

export const filterFile = function (file, cb) {
    // Accept files or docs only
    if (file.originalname.match(/\.(pdf|doc|txt|jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
        return cb(null, true);
    }
    return cb(new Error("Only files and images are allowed!"), false);
};

import { StatusCodes } from "http-status-codes";
import { uploadFile, filterFile, generatePublicUrl, deleteFile } from "./googleapi.js";
// import { logger } from "../helpers/logger.js";
import multer from "multer";
import stream from "stream";

const { CREATED, BAD_REQUEST, OK, NOT_FOUND } = StatusCodes;

export const upload = multer({
    fileFilter: (_req, file, cb) => {
        filterFile(file, cb);
    },
    limits: {
        fileSize: 5 * 1024 * 1024, // no larger than 10mb
    },
});

export const createFile = async (req, res) => {
    logger.debug("creating files");
    try {
        const documents = req.files;

        if (!documents) {
            return res.status(NOT_FOUND).json({
                error: true,
                message: "No file selected",
            });
        }

        documents.forEach(doc => {
            doc.bufferStream = new stream.PassThrough();
            doc.bufferStream.end(doc.buffer);
        });

        // upload file and get public url
        const uploaded = await Promise.all(
            documents.map(async doc => {
                const upload = await uploadFile(doc.originalname, doc.bufferStream);
                doc.url = await generatePublicUrl(upload.id);
                return doc.url;
            }),
        );
        return res.status(CREATED).json({
            error: false,
            message: "file uploaded successfully",
            data: { url: uploaded.webViewLink, content: uploaded.webContentLink },
        });
    } catch (error) {
        logger.error("🔥 error: %o", error);
        return res.status(BAD_REQUEST).json({
            error: true,
            message: error.message || "server error",
        });
    }
};

export const removeFile = async (req, res) => {
    logger.debug("deleting files...");
    try {
        const { url } = req.body;

        await deleteFile(url);
        return res.status(OK).json({
            error: false,
            message: "file deleted successfully",
            data: { url },
        });
    } catch (error) {
        logger.error("🔥 error: %o", error);
        return res.status(BAD_REQUEST).json({
            error: true,
            message: error.message || "server error",
        });
    }
};

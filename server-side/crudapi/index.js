import express from "express";

import usersRoutes from "./routes/users.js";

import mongoose from "mongoose";

import "dotenv/config";

import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

mongoose.Promise = global.Promise;
mongoose.set("useUnifiedTopology", true);
mongoose.set('useCreateIndex', true);

// In order to access the localhost from anywhere, install cors middleware
app.use(cors());
app.use(express.json());
app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send("Hello from Hompage."));

mongoose
    .connect(process.env.LOCAL_MONGO_DB, { useNewUrlParser: true })
    .then(() => console.log("connected to DB"))
    .catch((err) => console.log(err));


app.listen(port, () => console.log(`Server running on port: ${port}`));

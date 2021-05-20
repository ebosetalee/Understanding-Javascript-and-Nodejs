import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        age: { type: Number, required: true }
    },
    { timestamps: true }
);

const Users = mongoose.model("Users", userSchema);
export default Users;

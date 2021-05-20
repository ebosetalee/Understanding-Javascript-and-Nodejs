import express from "express";
// import { v4 as uuidv4 } from 'uuid'; is used in controllers

import { getUsers, createUser, getUser, updateUser, deleteUser} from "../controllers/users.js"


const router = express.Router();

// this was moved to controllers.
// we'll be using uuid
// const users = [];

// do not use "/users" rather just "/" because all routes in here
// begin with "/users"

router.get("/", getUsers);

// the post route is in controllers/users.js
router.post("/", createUser);

//  ":" means anything after
router.get("/:id", getUser);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser)

// to make use of this router we export
export default router;
// module.exports = router;

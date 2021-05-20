//import { v4 as uuidv4 } from 'uuid'; mongodb offers id so no need to create one
import Users from "../models/users.js";

// we'll be using uuid
// const users = [];// this moved to models instead of array, its db.

export const getUsers = async (req, res) => {
    // res.send(users) for array

    try {
        const users = await Users.find();
        // if (!users) throw Error("There are no users!")
        res.status(200).json({ data: users });
    } catch (err) {
        res.json({ message: err });
    }
};

export const createUser = async (req, res) => {
    // const user = req.body; this is for arrays
    // users.push({ ...user, id: uuidv4()}); // note ... is spread here not rest
    // res.send(`user with First Name ${user.firstName} added to the database.`);

    const user = new Users(req.body);
    console.log(user);

    try {
        const userAdded = await user.save();
        //if (!user) throw Error("Something is wrong while saving");
        res.status(200).json({ message: "User Uploaded", data: userAdded });
    } catch (err) {
        res.status(400).json({ message: err });
    }
};

export const getUser = async (req, res) => {
    // for array
    //const { id } = req.params;
    // const foundUser = Users.find((user) => user.id === id);
    // res.send(foundUser);

    try {
        const findUser = await Users.findById(req.params.id);
        res.status(200).json({ message: "User found", data: findUser });
    } catch (err) {
        res.status(400).json({ message: err });
    }
};

export const updateUser = async (req, res) => {
    // for arrays:
    // const { id } = req.params;
    // const { firstName, lastName, age } = req.body;
    // const user = Users.find((user) => user.id === id);
    // if (firstName) user.firstName = firstName;
    // if (lastName) user.lastName = lastName;
    // if (age) user.age = age;
    // res.send(`User with the id ${id} updated successfully.`);

    try {
        const updatedUser = await Users.updateOne(
            { _id: req.params.id },
            req.body
        );
        res.status(200).json({ message: "User updated", data: updatedUser });
    } catch (err) {
        res.status(400).json({ message: err });
    }
};

export const deleteUser = async (req, res) => {
    // for arrays:
    // const { id } = req.params;
    // users.pop(Users.find((user) => user.id === id));
    // or you can do
    // users = users.filter((user) => user.id !== id);
    // however, if you use filter ensure you're assigning users
    // with let and not const
    // res.send(`User with id ${id} deleted from the database`);

    try {
        const removeUser = await Users.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "User deleted", data: removeUser });
    } catch (err) {
        res.status(400).json({ message: err });
    }
};

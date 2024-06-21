import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const signout = async (req, res, next) => {
    try {
        res.clearCookie("access_token_sleep").status(200).json("User has been signed out");
    } catch (error) {
        next(error);
    }
}

export const getUsers = async (req, res, next) => {
    try {
        const filteredUsers = await User.find({ _id: { $ne: req.user.id } });
        const filteredUserData = await filteredUsers.map(({ _id, fullName, email, createdAt, updatedAt, __v }) => {
            return { _id, fullName, email, createdAt, updatedAt, __v };
        });
        res.status(200).json(filteredUserData);
    } catch (error) {
        next(error);
    }
};
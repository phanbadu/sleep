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
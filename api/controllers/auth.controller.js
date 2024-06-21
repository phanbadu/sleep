import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password || fullName === "" || email === "" || password === "") {
        next(errorHandler(400, "All fields are required"));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = await new User({
        fullName,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        res.json({ message: "Signup successfuly!" });
    } catch (error) {
        next(error);
    }
};
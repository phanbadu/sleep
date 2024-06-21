import epxress from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
dotenv.config();

const app = epxress();
app.use(epxress.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000!");
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

mongoose.connect(process.env.MONGO)
    .then(() => console.log("MongoDb is connected"))
    .catch((err) => console.log(err))
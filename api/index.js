import express from "express";
import dotent from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import hotlesRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
const app = express();

dotent.config();

const connet = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connnection SuccessFull")
    } catch (error) {
        console.log("Connection faild")
    }
}


app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotlesRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);



app.listen(8000, () => {
    connet();
    console.log("Server is running")
})
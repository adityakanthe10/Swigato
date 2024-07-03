import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import dotenv from "dotenv";

//  app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB(
  "mongodb+srv://FoodDelivery:FEFXRCXcwMFG8nR4@cluster0.gccbgza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

// api endpoints

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});

// username FoodDelivery
// password FEFXRCXcwMFG8nR4

// user :test4
// username : test4@gmail.com
// password : FOOTBALL@test1234

// username : test4@gmail.com
// password : FOOTBALL@test1234

// "email":"user.aditya@gmail.com",
// "password":"12345678"

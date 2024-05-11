import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

//  app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints

app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});

// username FoodDelivery
// password FEFXRCXcwMFG8nR4
// mongodb+srv://FoodDelivery:FEFXRCXcwMFG8nR4@cluster0.gccbgza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

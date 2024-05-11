import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://FoodDelivery:FEFXRCXcwMFG8nR4@cluster0.gccbgza.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};

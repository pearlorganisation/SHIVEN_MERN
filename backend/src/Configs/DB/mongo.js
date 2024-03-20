// -----------------------------------------------Imports-------------------------------------------------------
import mongoose from "mongoose";
// -------------------------------------------------------------------------------------------------------------

export const mongoConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to Mongo Successfully");
  } catch (error) {
    console.log(error.message);
  }
};

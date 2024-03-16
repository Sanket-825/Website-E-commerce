import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sanketparab825:Thunder825@cluster0.udgvzi4.mongodb.net/"
    );

    console.log("mongodb is connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;

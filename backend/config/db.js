import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ DB Connection Failed:", err.message);  // ✅ exact error shown in Render logs
    process.exit(1);
  }
};

export default connectDb;

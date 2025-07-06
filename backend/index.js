// import express from "express"
// import dotenv from "dotenv"
// import connectDb from "./config/db.js"
// import authRouter from "./routes/auth.routes.js"
// import cookieParser from "cookie-parser"
// dotenv.config()
// import cors from "cors"
// import userRouter from "./routes/user.routes.js"
// import messageRouter from "./routes/message.routes.js"
// import { app, server } from "./socket/socket.js"

// const port=process.env.PORT || 5000


// app.use(cors({
//     origin:"http://localhost:5173",
//     credentials:true
// }))
// app.use(express.json())
// app.use(cookieParser())
// app.use("/api/auth",authRouter)
// app.use("/api/user",userRouter)
// app.use("/api/message",messageRouter)



// server.listen(port,()=>{
//     connectDb()
//     console.log("server started")
// })

import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import messageRouter from "./routes/message.routes.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const port = process.env.PORT || 5000;
app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = [
      "http://localhost:5174",
      "https://chatly-frontend.vercel.app"
    ];

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  },
  credentials: true
}));


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/message", messageRouter);

server.listen(port, () => {
  connectDb();
  console.log(`✅ Server started on http://localhost:${port}`);
});

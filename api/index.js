import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
// import multer from "multer";
import { dirname } from "path";
import { fileURLToPath } from "url";
import "dotenv/config";
import User from "./models/User.js";
import clientRoutes from "./routes/client.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

// image upload
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./upload/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//   },
// });

// var upload = multer({ storage: storage });

const app = express();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("open", () => console.log("Connected to db"));

const corsOptions = {
  origin: "http://localhost:3000", // 
  credentials: true, 
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());



app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.find({ id });
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.use("/client", clientRoutes);




app.listen(4000, () => {
  console.log(`app listening on port ${4000}`);
});

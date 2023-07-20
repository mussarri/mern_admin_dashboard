import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import "dotenv/config";
import clientRoutes from "./routes/client.js";
import salesRoutes from "./routes/sales.js";
import adminRoutes from "./routes/admin.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

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

app.use("/client", clientRoutes);
app.use("/sales", salesRoutes);
app.use("/admin", adminRoutes);

app.listen(4000, () => {
  console.log(`app listening on port ${4000}`);
});

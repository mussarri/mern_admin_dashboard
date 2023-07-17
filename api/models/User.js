import mongoose from "mongoose";

const UserScheme = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, min: 6 },
  city: String,
  state: String,
  country: String,
  occupation: String,
  phoneNumber: String,
  transactions: Array,
  role: {
    type: String,
    enum: ["user", "admin", "superadmin"],
  },
  createdAt: { type: String, default: Date.now },
});

const User = mongoose.model("User", UserScheme);

export default User;

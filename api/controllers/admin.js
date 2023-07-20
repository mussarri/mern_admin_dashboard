import User from "../models/User.js";

export const getAdmins = async (req, res) => {
  try {
    const { pageSize = 10, page = 1 } = req.query;
    const admins = await User.find({ role: "admin" })
      .select("-password")
      .skip(page * pageSize)
      .limit(pageSize);
    
    const count = await User.find().estimatedDocumentCount();
    res.status(200).json({ admins, count });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

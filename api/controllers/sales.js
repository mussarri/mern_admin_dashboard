import OverallStat from "../models/OverallStat.js";

export const getSales = async (req, res) => {
  try {
    const overallstat = await OverallStat.find();
    res.status(200).json(overallstat[0]);
  } catch (error) {
    res.status(404).json({ error: message });
  }
};

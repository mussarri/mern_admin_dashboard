import Product from "../models/Products.js";
import User from "../models/User.js";
import ProductStat from "../models/ProductStat.js";
import Transaction from "../models/Transaction.js";
import getCountryISO3 from "country-iso-2-to-3";

export const getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.find({ id });
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );
    res.status(200).json(productsWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCustomers = async (req, res) => {
  try {
    const { pageSize = 10, page = 1 } = req.query;
    const customers = await User.find({ role: "user" })
      .select("-password")
      .skip(page * pageSize)
      .limit(pageSize);

    const count = await User.find().estimatedDocumentCount();

    res.status(200).json({ customers, count });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const { pageSize = 10, page = 1 } = req.query;
    const transactions = await Transaction.find()
      .skip(page * pageSize)
      .limit(pageSize);
    const count = await Transaction.find().estimatedDocumentCount();

    res.status(200).json({ transactions, count });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getLocations = async (req, res) => {
  try {
    const users = await User.aggregate([
      { $group: { _id: "$country", count: { $sum: 1 } } },
    ]);
    const locationData = users.map((data) => ({
      id: getCountryISO3(data._id),
      value: data.count,
    }));
    res.status(200).json(locationData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

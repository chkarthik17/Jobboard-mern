import News from "../models/News.js";

export const getAllNews = async (req, res) => {
  const news = await News.find().sort({ createdAt: -1 });
  res.json(news);
};

export const getNewsById = async (req, res) => {
  const news = await News.findById(req.params.id);
  res.json(news);
};

export const createNews = async (req, res) => {
  const news = await News.create(req.body);
  res.status(201).json(news);
};

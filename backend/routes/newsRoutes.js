import express from "express";
import News from "../models/News.js";

const router = express.Router();

/* GET all news */
router.get("/", async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* CREATE news */
router.post("/", async (req, res) => {
  try {
    const news = await News.create(req.body);
    res.status(201).json(news);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/* UPDATE news by ID */
router.put("/:id", async (req, res) => {
  try {
    const updatedNews = await News.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedNews) {
      return res.status(404).json({ message: "News not found" });
    }

    res.json(updatedNews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* DELETE news */
router.delete("/:id", async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ message: "News deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

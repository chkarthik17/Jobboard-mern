import File from "../models/File.js";

export const getFiles = async (req, res) => {
  const files = await File.find().sort({ createdAt: -1 });
  res.json(files);
};

export const getFileById = async (req, res) => {
  const file = await File.findById(req.params.id);
  res.json(file);
};

// ✅ ADD THIS
export const createFile = async (req, res) => {
  const file = await File.create(req.body);
  res.status(201).json(file);
};

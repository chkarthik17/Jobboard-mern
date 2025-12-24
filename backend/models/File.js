import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  title: String,
  thumbnail: String,
  fileUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("File", fileSchema);

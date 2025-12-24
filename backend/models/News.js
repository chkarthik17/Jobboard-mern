import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("News", newsSchema);

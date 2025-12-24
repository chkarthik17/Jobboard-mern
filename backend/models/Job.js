import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  company: String,
  title: String,
  skills: [String],
  salary: String,
  logo: String,
  applyLink: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Job", jobSchema);

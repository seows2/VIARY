import mongoose from "mongoose";

const GroupSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Text is required",
  },
  description: {
    type: String,
  },
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const model = mongoose.model("Group", GroupSchema);

export default model;

import mongoose from "mongoose";

const tittokSchema = mongoose.Schema({
  url: {
    type: String,
    unique: true,
    required: true,
  },
  channel: {
    type: String,
    unique: true,
    required: true,
  },
  song: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    unique: true,
    required: true,
  },
  likes: {
    type: String,
    unique: true,
    required: true,
  },
  shares: {
    type: String,
    unique: true,
    required: true,
  },
  messages: {
    type: String,
    unique: true,
    required: true,
  },
});

export default mongoose.model("tiktokVideos", tittokSchema);

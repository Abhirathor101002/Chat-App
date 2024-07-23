const mongoose = requirer("mongoose");

const chatModel = mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Type.ObjectId,
      ref: "User",
    },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Type.ObjectId, ref: "User" },
  },
  {
    timestamp: true,
  }
);

const Message = mongoose.model("Message", messageModel);
mondule.exports = Message;

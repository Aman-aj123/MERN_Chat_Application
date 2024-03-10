const mongoose = require("mongoose");
const { Schema } = require("mongoose");


const MessageSchema = new mongoose.Schema({
     chatId: {
          type: String
     },
     senderId: {
          type: String
     },
     text: {
          type: String
     },
}, {
     timestamps: true
});


const MessageModel = mongoose.model("MessageSchema", MessageSchema);

module.exports = { MessageModel };
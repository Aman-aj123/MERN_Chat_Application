const mongoose = require("mongoose");
const { Schema } = require("mongoose");


const ChatSchema = new mongoose.Schema({
     members: {
          type: Array
     },
}, {
     timestamps: true
});

const ChatModel = mongoose.model("ChatSchema", ChatSchema);

module.exports = { ChatModel };
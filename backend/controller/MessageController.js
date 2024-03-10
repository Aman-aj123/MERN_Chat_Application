const { MessageModel } = require("../models/MessageModel");


// Adding the message on '/api/message/'
const addMessage = async (req, res) => {
     const { chatId, senderId, text } = req.body;

     try {
          const createdMessage = await MessageModel.create({
               chatId,
               senderId,
               text
          });
          res.status(200).json({ sucess: true, message: "Message is created sucessfully...", createdMessage });

     } catch (error) {
          res.status(500).json({ sucess: false, error: "Some Internal server error occurs while adding messages.." });
          console.log(`Some internal server error occurs while Adding message with: ${error}`);
     }
};





// Finding the messages on '/api/message/:chatId'
const getMessages = async (req, res) => {
     try {
          const { chatId } = req.params;
          const result = await MessageModel.find({ chatId });

          res.status(200).json({ sucess: true, message: "Message is finded sucessfully..", result });

     } catch (error) {
          res.status(500).json({ sucess: false, error: "Some Internal server error occurs while getting message..." })
          console.log(`Some Internal server occurs while getting Message with: ${error}`);
     }
};



module.exports = { addMessage, getMessages };
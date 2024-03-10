const { ChatModel } = require("../models/ChatModel");


// Creating a chat on "/api/chat/" route
const createChat = async (req, res) => {
     try {
          const createdChat = await ChatModel.create({
               members: [req.body.senderId, req.body.receiverId]
          });
          res.status(200).json({ sucess: true, message: "Chat is created sucessfully...", createdChat });

     } catch (error) {
          req.status(500).json({ sucess: false, error: "Some Internal server error occurs while creating new Chat" });
          console.log(`Internal Server error happens while Creating New chat with: ${error}`);
     }
};



// Finding the chats of the user on 'api/chat/:userId'
const userChats = async (req, res) => {
     try {
          const findedChat = await ChatModel.find({
               members: { $in: [req.params.userId] }
          });
          res.status(200).json({ sucess: true, message: "User chat is finded sucessfully..", findedChat })

     } catch (error) {
          res.status(500).json({ sucess: false, error: "Some Internal server error occurs while Finding userChats" });
          console.log(`Some Internal sever error occurs while Finding a userChats with: ${error}`);
     }
};




// Finding the Specific chat of the specific user on '/api/chat/:firstId:secondId'
const findChat = async (req, res) => {
     try {
          const chat = await ChatModel.findOne({
               members: { $in: [req.params.firstId, req.params.secondId] }
          });
          
          res.status(200).json({sucess: true, message: "Chat have been sucessfully finded..", chat});

     } catch (error) {
          res.status(500).json({ sucess: false, error: "Some internal server error occurs while finding the user" });
          console.log(`Some Internal server error occurs while finding the  user with: ${error}`);
     };
};



module.exports = { createChat, userChats, findChat };
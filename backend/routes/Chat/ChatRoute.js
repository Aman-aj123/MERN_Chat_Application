const express = require("express");
const router = express.Router();

const { createChat, userChats, findChat } = require("../../controller/ChatController")

router.post("/", createChat);
router.post("/:userId", userChats);
router.post("/find/:firstId/:secondId", findChat);




module.exports = router;
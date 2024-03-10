const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { UserModel } = require("../../models/User");



router.post("/", async (req, res) => {
     try {
          // Checking the 'correct' credentials of the user
          const { password, email } = req.body;
          const hasUser = await UserModel.findOne({ email: email });

          if (!hasUser) {
               res.status(400).json({ sucess: false, error: "Invalied Email try again..." });
               return;
          };

          const correctPassword = await bcrypt.compare(password, hasUser.password);
          if (!correctPassword) {
               res.status(400).json({ sucess: false, error: "Envalied password try again.." });
               return;
          };

          const user = {
               id: hasUser._id
          };


          const authToken = jwt.sign(user, process.env.JWT_SECRET);

          res.status(200).json({sucess: true, message: "Login sucessfully...", authToken });


     } catch (error) {
          res.status(500).json({ sucess: false, error: `Some Internal server error occurs` });
          console.log(`Some Internal server error occurs while login with: ${error}`);
     };
});

module.exports = router;
const express = require("express");
const router = express.Router();

const { UserModel } = require("../../models/UserModel");
const { fetchUser } = require("../../middleware/fetchUser");

const bcrypt = require('bcryptjs');


router.put("/:id", fetchUser, async (req, res) => {

     try {

          const userId = req.user.id;
          const requestedUserId = req.params.id;


          // IF the user wanted to update the credentials of other users
          if (userId !== requestedUserId) {
               res.status(401).json({ sucess: false, error: "Not allowed..." });
          };

          const findedUser = await UserModel.findById(req.params.id);

          if (!findedUser) {
               res.status(400).json({ sucess: false, error: "User not found.." });
          };

          const { password, email, name } = req.body;

          // If the credentials are not provided
          if (!password || !email || !name) {
               res.status(400).json({ sucess: false, error: "Please enter the credentials to update.." });
          };

          // hashing the password
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);

          // updating the informations
          const updatedInfo = {
               name: name,
               email: email,
               password: hashedPassword
          };

          await UserModel.updateOne({ _id: findedUser._id,}, updatedInfo);

          res.status(200).json({ sucess: true, message: "Your credentials have sucessfully update.." });

     } catch (error) {
          res.status(500).json({ sucess: false, error: "Some Internal server error occurs" });
          console.log(`Internal server error occurs while Updating the user with: ${error}`);
     };

});





module.exports = router;
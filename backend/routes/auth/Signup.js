const express = require("express");
const router = express.Router();

const { UserModel } = require("../../models/UserModel");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.post("/", async (req, res) => {
     try {
          // Checking if the user already exists
          const hasName = await UserModel.find({ name: req.body.name });
          const hasEmail = await UserModel.find({ email: req.body.email });

          if (hasName.length > 0 || hasEmail.length > 0) {
               res.status(400).json({ sucess: false, error: "User Already exists with these credentials" });
               return;
          };

          // Hashing the password
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(req.body.password, salt)

          
          // Creating a new user
          const createdUser = await UserModel.create({
               name: req.body.name,
               email: req.body.email,
               password: hashedPassword
          });

          const user = {
               id: createdUser._id
          }

          const authToken = jwt.sign(user, process.env.JWT_SECRET);
          
          res.status(200).json({ sucess: true, message: "Signup sucessfullly...", authToken});

     } catch (error) {
          res.status(500).json({ sucess: false, error: "Some Internal error occurs" });
          console.log(`Some internal server occurs while signup with: ${error}`);
     }

});

module.exports = router;
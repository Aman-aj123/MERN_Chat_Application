const express = require("express");
const router = express.Router();

const { fetchUser } = require("../../middleware/fetchUser");
const { UserModel } = require("../../models/UserModel");


router.post("/", fetchUser, async (req, res) => {
     try {
          const userId = req.user.id;

          // finding the user with the id
          const findedUser = await UserModel.findById(userId);

          if (!findedUser) {
               return res.status(400).json({ sucess: false, error: "User doesn't exists" });
          };

          return res.status(200).json({ sucess: true, message: "User have sucessfully finded...", findedUser });

     } catch (error) {
          // IF the error occurs then send the error message
          if (error.name === "CastError") {
               res.status(400).json({ sucess: false, error: "Envalied user id" });
          };
          res.status(500).json({ sucess: false, error: "Some internal server error occurs" });
          console.log(`Some Intenal server error occurs while getting user with: ${error}`);
     };

});


module.exports = router;
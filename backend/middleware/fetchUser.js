const dotenv = require("dotenv");
dotenv.config();

const jwt = require("jsonwebtoken");

const fetchUser = async (req, res, next) => {
     try {
          const authToken = req.header("auth-token");
          if (!authToken) {
               res.status(400).json({ sucess: false, error: "Please provide auth-token in header.." });
               return;
          };

          const user = jwt.verify(authToken, process.env.JWT_SECRET);
          req.user = user;

          next();


     } catch (error) {
          if (error.name === "JsonWebTokenError") {
               res.status(500).json({ sucess: false, error: "Please authenticate using  valied token" });
               return;
          };
          res.status(500).json({ sucess: false, error: "Some internal server occurs while fetching the user" });
          return;
     };
};




module.exports = { fetchUser };
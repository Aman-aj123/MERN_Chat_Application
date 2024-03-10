const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;

const { connectToMongoose } = require("./database/db");
connectToMongoose();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
     res.send(`Welcome to MERN Chat application..`);
});

const Signup = require("./routes/auth/Signup");
const Login = require("./routes/auth/Login");
const UpdateUser = require("./routes/auth/UpdateUser");

//------> Custom routes
app.use("/api/user/auth/signup", Signup);
app.use("/api/user/auth/login", Login);
app.use("/api/user/auth/update", UpdateUser);



//-----> Starting the server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));



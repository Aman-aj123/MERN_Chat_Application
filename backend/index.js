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
const GetUser = require("./routes/auth/GetUser");
const ChatRoute = require("./routes/Chat/ChatRoute");
const MessageRoute = require("./routes/Chat/MessageRoute");

//------> Custom routes
app.use("/api/user/auth/signup", Signup);
app.use("/api/user/auth/login", Login);
app.use("/api/user/auth/update", UpdateUser);
app.use("/api/user/auth/getuser", GetUser);
app.use("/api/chat", ChatRoute);
app.use("/api/message", MessageRoute);



//-----> Starting the server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));



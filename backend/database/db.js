const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const mongooseURI = process.env.MONGOOSE_URI;

const connectToMongoose = async () => {
     try {
          await mongoose.connect(mongooseURI);
          console.log(`Connection sucessfuly to mongoose..`);

     } catch (error) {
          console.log(`Error happens while connecting to mongoose with: ${error}`);
     }
};


module.exports = { connectToMongoose };
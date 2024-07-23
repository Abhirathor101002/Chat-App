const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); // Loading environment variables from .env file
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);

//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
//   } catch (error) {
//     console.log(`Error: ${error.message}`);
//     process.exit(1); // Exit process with failure
//   }
// };
console.log(process.env.MONGO_URI);
mongoose
  .connect(`${process.env.MONGO_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

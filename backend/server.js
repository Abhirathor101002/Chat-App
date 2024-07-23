const express = require("express");
const cors = require("cors"); // Importing cors middleware
const dotenv = require("dotenv");
require("./config/db"); // Assuming you have a db configuration file
const userRoutes = require("./routes/userRoutes");
dotenv.config(); // Loading environment variables from .env file

const app = express();

// Middleware
app.use(cors()); // Using cors middleware to handle Cross-Origin Resource Sharing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!"); // Example route
});

// app.use("/api/users", userRoutes); // Mounting userRoutes under '/api/users'

// // Error handling middleware (optional)
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

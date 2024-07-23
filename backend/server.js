const express = require("express");
const cors = require("cors"); // Importing cors middleware
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // Assuming you have a db configuration file
const userRoutes = require("./routes/userRoutes"); // Assuming you have a userRoutes file
dotenv.config(); // Loading environment variables from .env file
connectDB(); // Connecting to the database

const app = express();

// Middleware
app.use(cors()); // Using cors middleware to handle Cross-Origin Resource Sharing
app.use(express.json()); // Parsing JSON request bodies

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!"); // Example route
});

app.use("/api/users", userRoutes); // Mounting userRoutes under '/api/users'

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

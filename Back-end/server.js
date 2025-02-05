const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const askrouter = require("./src/Router/router");
const lawyerrouter = require("./src/Router/lawyerrouter");

 // Import Gemini function
 // Import Router
require("dotenv").config({path:"./src/Config/.env"})

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json())
app.use(express.static("public")); // Serve static files from 'public' directory

// Use router for AI chat and lease agreement


// Root route - Serve the frontend React app
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html"); // Ensure React app is served
});
app.use("/ask", askrouter)
app.use("/lawyer",lawyerrouter)
// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

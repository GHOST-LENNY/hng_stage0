const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 7777;

// Enable CORS
app.use(cors());

// API Endpoint
app.get("/", (req, res) => {
    const responseData = {
        email: "lennyddon@gmail.com",
        current_datetime: new Date(),
        github_url: "https://github.com/GHOST-LENNY/hng_stage0.git"
    };
    res.status(200).json(responseData)
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

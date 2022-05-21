// Import dependencies
const express = require("express")
const cors = require("cors");
const PORT = process.env.PORT || 4000

// Import json files
const projects = require("./projects.json")
const about = require("./about.json")

// Set up middleware

const app = express();
app.use(cors())

// ROUTES 
// home for testing
app.get("/", (req, res) => {
    res.send("Testing, testing, one, two, three")
})

// route for projects
app.get("/projects", (req, res) => {
    res.json(projects)
})

// route for about 
app.get("/about", (req, res) => {
    res.json(about)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
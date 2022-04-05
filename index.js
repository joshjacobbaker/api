const express = require("express")
const cors = require("cors")

// modules
const api = require("./src/routes/api.js")

// Variables
const PORT = 3001

const app = express()
app.use(cors())
app.use("/api", api)
app.get("/", (req, res) => {
  console.log("server GET request at root route \\")
  res.send("Hello World!")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

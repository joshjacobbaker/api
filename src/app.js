const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

// Routers
const apiRouter = require("./routes/api/apiRouter.js")
const postsRouter = require("./routes/posts/postsRouter.js")
const usersRouter = require("./routes/users/usersRouter")

// Variables
const PORT = parseInt(process.env.PORT) || 8080

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use("/api", apiRouter)
app.use("/posts", postsRouter)
app.use("/users", usersRouter)
app.get("/", (req, res) => {
  console.log("server GET request at root route \\")
  res.send("Hello World!")
})

module.exports = app

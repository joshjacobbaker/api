const express = require("express")
const bodyParser = require("body-parser")

// CORS Configuration
const cors = require("cors")
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
}
// Routers
const apiRouter = require("./routes/api/apiRouter.js")
const postsRouter = require("./routes/posts/postsRouter.js")
const usersRouter = require("./routes/users/usersRouter")
const notificationsRouter = require("./routes/notifications/notificationsRouter")
// Sequelize Postgres DB Connection

// Variables
const PORT = parseInt(process.env.PORT) || 8080

const app = express()
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use("/api", apiRouter)
app.use("/posts", postsRouter)
app.use("/users", usersRouter)
app.use("/notifications", notificationsRouter)
app.get("/", (req, res) => {
  console.log("server GET request at root route \\")
  res.send("Hello World!")
})

module.exports = app

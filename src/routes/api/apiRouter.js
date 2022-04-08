const express = require("express")
const axios = require("axios")

const api = require("./apiQuery")

const apiRouter = express.Router()

apiRouter.get("/posts", api.populatePostsTable)
apiRouter.get("/users", api.populateUsersTable)

module.exports = apiRouter

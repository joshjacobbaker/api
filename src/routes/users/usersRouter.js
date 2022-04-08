const express = require("express")

const usersDb = require("./usersQueries")

const usersRouter = express.Router()

usersRouter.get("/", usersDb.getUsers)
usersRouter.get("/:id", usersDb.getUserById)
usersRouter.post("/", usersDb.createUser)
usersRouter.put("/:id", usersDb.updateUser)
usersRouter.delete("/:id", usersDb.deleteUser)

module.exports = usersRouter

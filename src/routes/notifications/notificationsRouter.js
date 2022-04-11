const express = require("express")

const notificationsDb = require("./notificationsQueries")

const notificationsRouter = express.Router()

notificationsRouter.get("/", notificationsDb.postNotification)
// notificationsRouter.get("/:id", notificationsDb.getnotificationById)
// notificationsRouter.post("/", notificationsDb.createnotification)
// notificationsRouter.put("/:id", notificationsDb.updatenotification)
// notificationsRouter.delete("/:id", notificationsDb.deletenotification)

module.exports = notificationsRouter

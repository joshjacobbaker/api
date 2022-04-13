const express = require("express")

const postsDb = require("./postsQueries")

const postsRouter = express.Router()

postsRouter.get("/", postsDb.getPosts)
postsRouter.get("/:id", postsDb.getPostById)
postsRouter.post("/", postsDb.createPost)
postsRouter.put("/:id", postsDb.updatePost)
postsRouter.put("/reactions/:id", postsDb.updatePostReaction)
postsRouter.delete("/:id", postsDb.deletePost)

module.exports = postsRouter

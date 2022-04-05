const express = require("express")
const router = express.Router()

const initialPostData = [
  { id: 1, date: new Date().toISOString(), title: "Title1", content: "Content1", user: 1, reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 } },
  { id: 2, date: new Date().toISOString(), title: "Title2", content: "Content2", user: 2, reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 } },
]
let count = 0
router.get("/", (req, res) => {
  count++
  console.log(`GET method ${count} times`)
  console.log(JSON.stringify(initialPostData))
  res.send(JSON.stringify(initialPostData))
})
router.post("/", (req, res) => {
  console.log("api route requested with POST method")
})

module.exports = router

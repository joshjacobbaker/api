const res = require("express/lib/response")
const { v4: uuidv4 } = require("uuid")

// const pool = require("../../database/connection/postgresPoolConnection")

const model = require("../../database/models/index.js")

// GET all Notifications
const postNotification = async (request, response) => {
  console.log("getNotifications")
  try {
    await model.notification.create({ dildo: "HUGE", gargle: "longtime" })
  } catch (e) {
    console.error(e)
  }
  response.send("success")
}

module.exports = { postNotification }
// Need to capture url query string i.e. ?since=latestTimestamp
// const latestTimestamp = request.query

// Query needs to filter results by time
// pool.query("SELECT * FROM public.notificationstable WHERE time >= $1 ORDER BY id ASC", [latestTimestamp], (error, results) => {
//   if (error) {
//     throw error
//   }
//   response.status(200).json(results.rows)

// sequelizeModel.notificationstable.create({user: "user1", date: "09/11/2001", message: "unique message"})
//   })
// }

// module.exports= postNotifications
// GET a single Post
// /Posts/:id
// $1
// const getPostById = async (request, response) => {
//   console.log("get single Post")
//   const id = parseInt(request.params.id)

//   pool.query("SELECT * FROM public.poststable WHERE id = $1", [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// POST a new Post
// /Posts
// name & email properties from body
// const createPost = async (request, response) => {
//   console.log("new Post")
//   const { title, body, userId } = request.body

//   // Response
//   let id = uuidv4()
//   let date = new Date().toISOString()
//   let reactions = { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 }

//   console.log(userId, id, title, body, date, reactions)
//   // userId, id, title, body, date, reactions
//   pool.query("INSERT INTO public.poststable (userId, id, title, body, date, reactions) VALUES ($1, $2, $3, $4, $5, $6)", [userId, id, title, body, date, reactions], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json({ userId, id, title, body, date, reactions })
//   })
// }

// PUT update an existing Post
// /Posts/:id
// id from param, and name, email from body
// const updatePost = async (request, response) => {
//   console.log("update existing Post")
//   const id = parseInt(request.params.id)
//   const { name, email } = request.body

//   pool.query("UPDATE Posts SET name = $1, email = $2 WHERE id = $3", [name, email, id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`Post modified with ID: ${id}`)
//   })
// }

// DELETE
// /Posts/:id
// id from param
// const deletePost = async (request, response) => {
//   console.log("delete Post")
//   const id = parseInt(request.params.id)

//   pool.query("DELETE FROM Posts WHERE id = $1", [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`Post deleted with ID: ${id}`)
//   })
// }

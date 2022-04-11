const axios = require("axios")
// const seqelize = require("../../database/models")
// const pool = require("../../database/connection/postgresPoolConnection")
const dateFns = require("date-fns")
// POST a new Post
// /Posts
// name & email properties from body
const fetchPostsData = async () => {
  let output = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return output.data
}

const fetchUsersData = async () => {
  let output = await axios.get("https://jsonplaceholder.typicode.com/users")
  return output.data
}

const populatePostsTable = async (req, res) => {
  console.log("fetching")

  const output = await fetchPostsData()

  var date = new Date().toISOString()

  var reactions = { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 }

  for (var i = 0; i < output.length; i++) {
    var { userId, id, title, body } = output[i]

    // await pool.query("INSERT INTO public.poststable (userId, id, title, body, date, reactions) VALUES ($1, $2, $3, $4, $5, $6)", [userId, id, title, body, date, reactions], (error, results) => {
    //   if (error) {
    //     throw error
    //   }
    //   console.log({ userId, id, title, body, date, reactions })
    // })
  }

  res.send("complete")
}

const populateUsersTable = async (req, res) => {
  console.log("fetching")
  const output = await fetchUsersData()

  for (var i = 0; i < output.length; i++) {
    var { id, name, username, email, address, phone, website, company } = output[i]

    // await pool.query("INSERT INTO public.userstable (id, name, username, email, address, phone, website, company) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [id, name, username, email, address, phone, website, company], (error, results) => {
    //   if (error) {
    //     throw error
    //   }
    //   console.log({ id, name, username, email, address, phone, website, company })
    // })
  }

  res.send("complete")
}

module.exports = { populatePostsTable, populateUsersTable }

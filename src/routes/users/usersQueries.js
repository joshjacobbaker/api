const pool = require("../../utilities/postgresPoolConnection")

// GET all users
const getUsers = async (request, response) => {
  console.log("getUsers")
  pool.query("SELECT * FROM public.userstable ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// GET a single user
// /users/:id
// $1
const getUserById = async (request, response) => {
  console.log("get single user")
  const id = parseInt(request.params.id)

  pool.query("SELECT * FROM public.userstable WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// POST a new user
// /users
// name & email properties from body
const createUser = async (request, response) => {
  console.log("new user")
  const { name, email } = request.body

  pool.query("INSERT INTO users (name, email) VALUES ($1, $2)", [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${result.insertId}`)
  })
}

// PUT update an existing user
// /users/:id
// id from param, and name, email from body
const updateUser = async (request, response) => {
  console.log("update existing user")
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [name, email, id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User modified with ID: ${id}`)
  })
}

// DELETE
// /users/:id
// id from param
const deleteUser = async (request, response) => {
  console.log("delete user")
  const id = parseInt(request.params.id)

  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}

const { v4: uuidv4 } = require("uuid")

const { post } = require("../../database/models/index")

// GET all Posts
const getPosts = async (request, response) => {
  console.log("getPosts")

  let allPosts = await post.findAll({
    order: [["updatedAt", "DESC"]],
  })

  response.status(200).json(allPosts)
}

// GET a single Post
// /Posts/:id
// $1
const getPostById = async (request, response) => {
  console.log("get single Post")
  const id = parseInt(request.params.id)

  const singlePost = await post.findAll({
    where: {
      id: id,
    },
  })

  response.status(200).json(singlePost)
}

// POST a new Post
// /Posts
// name & email properties from body
const createPost = async (request, response) => {
  console.log("new Post")
  const { title, body, userId } = request.body

  // Response
  let id = uuidv4()
  let date = new Date().toISOString()
  let reactions = JSON.stringify({ thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 })

  console.log({ id, userId, title, body, date, reactions, createdAt: date, updatedAt: date })

  try {
    const createdPost = await post.create({ id, userId, title, body, date, reactions, createdAt: date, updatedAt: date })
  } catch (e) {
    console.log(e)
  }
  response.status(200).json({ id, userId, title, body, date, reactions, createdAt: date, updatedAt: date })
}

// PUT update an existing Post
// /Posts/:id
// id from param, and name, email from body
const updatePost = async (request, response) => {
  console.log("update existing Post")
  const { id } = request.params
  const { title, body } = request.body
  console.log(`id: ${id}, title: ${title}, body: ${body}`)

  await post.update(
    { id, title, body },
    {
      where: {
        id: id,
      },
    }
  )

  response.status(200).json({ id, title, body })
}

// PUT update an existing Post
// /Posts/:id
// id from param, and name, email from body
const updatePostReaction = async (request, response) => {
  console.log("update existing Post")
  const { id } = request.params
  const { reaction } = request.body
  console.log(`id: ${id}, reaction: ${reaction}`)

  // get current reactions object
  const postToBeUpdated = await post.findByPk(id)
  let reactionsParsed = JSON.parse(postToBeUpdated.dataValues.reactions)
  // console.log(reactionsParsed)
  let reactionsUpdated = { ...reactionsParsed, [reaction]: ++reactionsParsed[reaction] }
  console.log(reactionsUpdated)
  let reactionsUpdatedStringified = JSON.stringify(reactionsUpdated)
  // console.log(reactionsUpdatedStringified)
  // parse our current object
  // update reaction properties count
  // stringify reaction object
  // save the object back into postgres

  const output = await post.update(
    { reactions: reactionsUpdatedStringified },
    {
      where: {
        id: id,
      },
    }
  )

  console.log("output: " + output)

  response.status(200).json({ postId: id, reactions: reactionsUpdatedStringified })
}

// DELETE
// /Posts/:id
// id from param
const deletePost = async (request, response) => {
  console.log("delete Post")
  const id = parseInt(request.params.id)

  // pool.query("DELETE FROM Posts WHERE id = $1", [id], (error, results) => {
  //   if (error) {
  //     throw error
  //   }
  //   response.status(200).send(`Post deleted with ID: ${id}`)
  // })
}

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  updatePostReaction,
  deletePost,
}

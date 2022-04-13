// "use strict"

const postsData = require("../postsData.json")
// const filteredPosts = postsData.map(({ id, ...rest }) => {
//   return rest
// })

// const formatArray = postsData.map((object) => `'${JSON.stringify(object)}'`)
// const filteredPostsStringify = JSON.stringify(filteredPosts)

// Need to update data
// userId id -> id userId
// userId -> userid
// createdAt: new Date(),
// updatedAt: new Date(),

const newPostsData = postsData.map(({ id, userId, title, body }) => {
  return { id, userid: userId, title, body, reactions: "", date: "", createdAt: new Date(), updatedAt: new Date() }
})

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("posts", newPostsData, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("posts", null, {})
  },
}

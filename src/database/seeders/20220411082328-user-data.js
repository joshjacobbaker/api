// "use strict"
const usersData = require("../usersData.json")
// const filteredUser = usersData.map(({ id, ...rest }) => {
//   return rest
// })

// Need to update data
// id is integer
// address -> string
// company -> string
// createdAt: new Date(),
// updatedAt: new Date(),

const newUsersData = usersData.map(({ id, name, username, email, address, phone, website, company }) => {
  return {
    id,
    name,
    username,
    email,
    address: JSON.stringify(address),
    phone,
    website,
    company: JSON.stringify(company),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})

// const formatArray = usersData.map((object) => `'${JSON.stringify(object)}'`)

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
    await queryInterface.bulkInsert("users", newUsersData, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {})
  },
}

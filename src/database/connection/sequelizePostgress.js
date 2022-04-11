// https://sequelize.org/docs/v6/core-concepts/model-basics/

const { Sequelize, DataTypes } = require("sequelize")
require("dotenv").config()

const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
  host: process.env.PG_HOST,
  dialect: process.env.DB_DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})

const connectPostgres = async () => {
  try {
    await sequelize.authenticate()
    await createNotificationsTable()
    await createPostsTable()
    await createUsersTable()
    console.log("Connection has been established successfully.")
  } catch (error) {
    console.error("Unable to connect to the database:", error)
  }
}

const createNotificationsTable = async () => {
  const notificationsTable = sequelize.define(
    "notificationstable",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      date: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      message: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      tableName: "notificationstable",
    }
  )

  await notificationsTable.sync({ force: true })
}

const createPostsTable = async () => {
  const postsTable = sequelize.define(
    "poststable",
    {
      userid: {
        type: DataTypes.TEXT,
        // allowNull defaults to true
      },
      id: {
        type: DataTypes.TEXT,
        // autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.TEXT,
        // allowNull defaults to true
      },
      body: {
        type: DataTypes.TEXT,
        // allowNull defaults to true
      },
      reactions: {
        type: DataTypes.TEXT,
        // allowNull defaults to true
      },
      date: {
        type: DataTypes.TEXT,
        // allowNull defaults to true
      },
    },
    {
      tableName: "poststable",
    }
  )

  await postsTable.sync({ force: true })
}

const createUsersTable = async () => {
  const usersTable = sequelize.define(
    "poststable",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      username: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      email: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      address: {
        type: DataTypes.TEXT,
        // allowNull defaults to true
      },
      phone: {
        type: DataTypes.TEXT,
        // allowNull defaults to true
      },
      website: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      company: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      tableName: "userstable",
    }
  )

  await usersTable.sync({ force: true })
}

module.exports = connectPostgres

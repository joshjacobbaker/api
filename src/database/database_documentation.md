# Resources

- [Sequelize Migrations & Models]("https://www.youtube.com/watch?v=ikJ5AXDj3go&list=PLpPnRKq7eNW1-2dnfzYkDcwFxOWxKiyAy&index=6")

# Commands

- npx sequelize init
  - setup 4 folders for sequilize project in current directory, then use .sequelizerc file in root to configure the CLI

## Create model & migration

npx sequelize model:generate --name notification --attributes user:string,date:string,message:string

npx sequelize model:generate --name post --attributes userid:string,title:string,body:string,reactions:string,date:string

npx sequelize model:generate --name user --attributes name:string,username:string,email:string,address:string,phone:string,website:string,company:string

- Creates the database with migration schema
  - npx sequelize db:migrate
- Deletes the database with migration schema
  - npx sequelize db:migrate:undo
- Seeding Data

## Seed Data

- npx sequelize seed:generate --name notification-data
- npx sequelize seed:generate --name post-data
- npx sequelize seed:generate --name user-data

  - npx sequelize seed:generate --name user-data
  - npx sequelize-cli db:seed:all
    npx sequelize-cli db:seed --seed nameofseedfile.js
  - npx sequelize-cli db:seed:undo:all
  - npx sequelize-cli db:seed:undo --seed nameofseedfile.js

# Files and directories

- .sequelizerc
  - configuration for npx sequelize CLI and located at root of project
- 4 folders: config, migration, models, seeders
  - config:
    - use dotenv to extract environment variables from .env file
    - has configuration for 3 different environments
  - migration:
    - defines the table and data schema
  - models:
    - use as clients to CRUD data into table/database
  - seeders:
    - writes data to table during initial setup?

# Libraries:

- sequelize
- pg
- pg-hstore

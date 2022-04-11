# Server for our Front-End App

### Backlog

- Setup Database PostGreSQL
- SECURITY.. Need to setup process variables
- Setup Cache REDIS
- github push update
- Kubernetes
- Deploy rest server... heroku?
- docker image build workflow in development
- Express Backend Validator

### WIP

- Sequelize CLI Database Migrations
- Setup sequelize PostGreSQL client
- Setup notifications table
- Fetch notifications with React Client from Express server api via PostgreSQL

### Finished Goods

- Created an API endpoint that returned JSON data to client
- Docker Postgresql
- API endpoint
- [Dockerize Express Server]("https://nodejs.org/en/docs/guides/nodejs-docker-webapp/")
- Docker-compose Server, pg, pgadmin

### Deployed

### Git Commands

### NPM Commands

# Backend Architecture Schematic

### Postgresql

<!-- Postgres Server -->

sudo docker run -d --name=postgrescontainer1 -p 5432:5432 -v postgres-volume:/var/lib/postgresql/data -e POSTGRES_PASSWORD=password postgres

<!-- Postgres Server Interactive-->

sudo docker exec -it postgrescontainer1 psql -U postgres

<!-- Postgres Admin -->

sudo docker run -d --name=pgadmincontainer1 -p 5050:80 -e "PGADMIN_DEFAULT_EMAIL=user@domain.com" -e "PGADMIN_DEFAULT_PASSWORD=password" dpage/pgadmin4

PostgreSQL values are in single quotes ‘’

<!-- must create tables in schemas/public/tables folder in order to be accessed by postgres-node client -->

<!-- https://towardsdatascience.com/how-to-run-postgresql-and-pgadmin-using-docker-3a6a8ae918b5 -->

<!-- https://linuxhint.com/run_postgresql_docker_compose/ -->

<!-- dockerhub -->

<!-- https://nodejs.org/en/docs/guides/nodejs-docker-webapp/ -->

<!-- https://faun.pub/step-by-step-guide-to-dockerize-a-node-js-express-application-cb6be4159cf1 -->

<!-- docker tag local-image:tagname new-repo:tagname
docker push new-repo:tagname
docker push joshjacobbaker/backendexpressserverpostgres:tagname -->

<!-- curl -X POST -H "Content-Type: application/json" \
    -d '{"title": "newTitle, "content": "newContent", "userId": "5"}' \
    https://jsonplaceholder.typicode.com/posts -->

<!-- curl -X POST -H "Content-Type: application/json" \
    -d '{"title": "newTitle, "content": "newContent", "userId": "5"}' \ http://localhost:8080/posts -->

<!-- https://date-fns.org/docs/Getting-Started -->

<!-- sudo docker build -t joshjacobbaker/backendexpressserverpostgres:latest . -->

<!-- https://sequelize.org/docs/v6/core-concepts/model-basics/ -->

<!-- https://www.youtube.com/watch?v=ikJ5AXDj3go&list=PLpPnRKq7eNW1-2dnfzYkDcwFxOWxKiyAy&index=6 -->

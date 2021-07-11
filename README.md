# Express TypeORM server

Express server example utilizing TypeORM with pgsql.

In this example we are considering a pg database called `sample-database` and the pg connection will be with the credentials `username: "postgres", password: "postgres"`

If your local config is different than that (probably it is) you should edit the following files to your local setup:

* docker-compose.yml
* src/database/init.sql
* ormconfig.js


### Running server

#### Development

run `(yarn|npm run) dev`

### Production

The prefered way to run this on production is by using Docker.

To do that just run `docker compose up`

If you want that the server persists even when terminal is closed, run `docker compose up -d`

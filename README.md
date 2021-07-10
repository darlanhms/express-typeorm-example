# Simple express typescript server

Simple express server utilizing TypeScript to test deploys

### Running server

#### Development


run `(yarn|npm run) dev`


### Production


The prefered way to run this on production is by using Docker.

First you'll have to build the docker image (cause we are using Dockerfile instead of compose) then you'll be able to run it.

To do that

* run `docker build -t <desired image name> -f ./Dockerfile  .` at the folder's root

* run `docker run -d -p 3000:3000 <desired image name>`

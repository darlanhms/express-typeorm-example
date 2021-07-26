FROM node:12-buster-slim AS base

RUN apt-get update && apt-get install --no-install-recommends --yes openssl

ENV PORT=3000

WORKDIR /app

FROM base as builder

COPY package.json ./

RUN npm i

COPY . .

FROM base as production

ENV NODE_ENV=production

COPY --from=builder ./app/node_modules ./node_modules
COPY --from=builder ./app/src ./src
COPY package.json ./
COPY ormconfig.js ./
COPY tsconfig.json ./

RUN npm run build

USER node


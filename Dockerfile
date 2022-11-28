# Base
FROM node:16-alpine3.15 AS base

ENV APP_DIR /app/
ENV NPM_CONFIG_PRODUCTION false
ENV NODE_ENV production

WORKDIR $APP_DIR

ADD package.json package-lock.json $APP_DIR
RUN npm install --production

# Build
FROM base AS build

RUN npm install
ADD . $APP_DIR
RUN npm run build

# Prod
FROM base AS release
LABEL name="kayway"

COPY --from=build $APP_DIR/out ./out
ADD . $APP_DIR

CMD npm start

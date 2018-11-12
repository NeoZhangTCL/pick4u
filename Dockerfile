FROM node:10.13.0-alpine
RUN apk add --no-cache bash

ENV NPM_CONFIG_LOGLEVEL info

ADD . /app
WORKDIR /app

RUN npm install -g expo-cli
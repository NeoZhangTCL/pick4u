FROM node:10.13.0-alpine
ENV NPM_CONFIG_LOGLEVEL info

ADD . /app
WORKDIR /app

RUN apk add --no-cache bash git
RUN npm install
RUN npm install -g expo-cli
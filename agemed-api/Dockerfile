FROM node:alpine

WORKDIR /api

COPY ./agemed-api/package*.json ./

COPY agemed-api/prisma ./prisma

COPY agemed-api/src ./src

RUN npm install

COPY . .

EXPOSE 3333

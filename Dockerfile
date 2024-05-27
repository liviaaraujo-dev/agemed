FROM node:alpine

WORKDIR /api

COPY ./package*.json ./

COPY /prisma ./prisma

COPY src ./src

COPY .env .env

RUN npm install

RUN npm install -g prisma

COPY . .

EXPOSE 3333

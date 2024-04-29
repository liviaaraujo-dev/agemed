FROM node:14

WORKDIR /app

COPY agemed-front/package.json agemed-front/package-lock.json /app/

RUN npm install

COPY ./agemed-front ./

EXPOSE 3000

CMD ["npm", "start"]

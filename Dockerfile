FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./
COPY src ./src

RUN npm install

EXPOSE 8081

CMD ["node", "src/main.js"]
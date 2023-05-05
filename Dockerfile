FROM node:latest AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 42100

CMD ["npm", "start"]
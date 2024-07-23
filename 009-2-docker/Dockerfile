# Основа образа для сборки приложения
FROM node:18-alpine as build

WORKDIR /app

COPY . .
RUN yarn && yarn add typescript tsc ts-node && yarn build
CMD ["node", "./dist/index.js"]

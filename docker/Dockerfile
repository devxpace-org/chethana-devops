FROM node:20-alpine

WORKDIR /chetana/app/

COPY package.json .
COPY home.js .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "home.js"]
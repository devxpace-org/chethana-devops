FROM node:20-alpine

COPY package.json /app/chethana-devops/
COPY src /app/chethana-devops/

WORKDIR /app/chethana-devops/

RUN npm install

ENTRYPOINT ["node", "nicejob.js"]
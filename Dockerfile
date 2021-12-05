FROM node:14-alpine

RUN mkdir -p /usr/node/app/node_modules && chown -R node:node /usr/node/app

WORKDIR /usr/node/app

COPY package*.json ./
USER node

RUN npm install

COPY --chown=node:node . .
RUN npm run build

EXPOSE 4000

CMD npm run prod
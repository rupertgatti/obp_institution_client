FROM node:latest

WORKDIR /usr/src/app/

COPY package.json ./
RUN npm install --silent

COPY ./ ./

CMD ["npm", "start"]

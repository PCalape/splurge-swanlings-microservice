FROM node:17.8-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4004

CMD [ "sh", "-c", "npm run prestart:prod && npm run start:prod" ]

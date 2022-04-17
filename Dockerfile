FROM node:16-alpine as build-stage

WORKDIR /usr/app

COPY package* ./

RUN npm ci

COPY . ./

RUN npm run build

FROM node:16-alpine

ENV PORT 80

RUN npm install -g serve

COPY --from=build-stage /usr/app/dist /usr/app/dist

CMD serve -l $PORT /usr/app/dist

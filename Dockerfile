FROM node:16-alpine as build-stage

WORKDIR /usr/app

COPY package* ./

RUN npm ci

COPY . ./

RUN npm run build

FROM alpine:3.13.2

COPY --from=build-stage /usr/app/dist /usr/app/dist

WORKDIR /usr/app/dist

RUN apk --no-cache add thttpd \
  && adduser -D static \
  && chmod a+x /usr/app/dist

CMD ["thttpd", "-D", "-h", "0.0.0.0", "-p", "80", "-d", "/usr/app/dist", "-u", "static", "-l", "-", "-M", "60"]

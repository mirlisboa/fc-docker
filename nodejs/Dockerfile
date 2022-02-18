FROM node:17-alpine3.15

RUN apk add --no-cache bash git

COPY start-container /usr/local/bin/start-container
RUN chmod +x /usr/local/bin/start-container

WORKDIR /app

USER node

EXPOSE 3000

ENTRYPOINT [ "start-container" ]
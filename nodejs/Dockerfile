FROM node:17-alpine3.15
#FROM node:17

WORKDIR /app

#RUN apt-get update && apt-get install -y wget
#RUN apt-get update && apt-get install -y curl

#RUN curl -sfL $(curl -s https://api.github.com/repos/powerman/dockerize/releases/latest | \
#    grep -i /dockerize-$(uname -s)-$(uname -m)\" | cut -d\" -f4) | \
#    install /dev/stdin /usr/local/bin/dockerize

RUN apk add --no-cache openssl

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000

CMD ["node","index.js"]
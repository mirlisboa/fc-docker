FROM golang:1.17.7-alpine3.15

RUN mkdir /app

WORKDIR /app

RUN go install github.com/mirlisboa/fc-docker-go/fullcycle.go

CMD [ "./fullcycle" ]
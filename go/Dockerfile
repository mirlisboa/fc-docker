FROM golang:1.17.7-alpine3.15 as builderapp

RUN mkdir -p /usr/local/go/src/fullcycle

WORKDIR /usr/local/go/src/fullcycle

COPY fullcycle.go .

RUN go build fullcycle.go


FROM alpine:3.5

WORKDIR /root

COPY --from=builderapp /usr/local/go/src/fullcycle ./

CMD [ "./fullcycle" ]
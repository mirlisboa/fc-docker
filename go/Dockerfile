FROM golang:1.17.7-alpine3.15 as builderapp

RUN apk add upx && \
    mkdir -p /usr/local/go/src/fullcycle

WORKDIR /usr/local/go/src/fullcycle

COPY fullcycle.go .

RUN go build -a -gcflags=all="-l -B -wb=false" -ldflags="-w -s" fullcycle.go && \
    upx fullcycle

FROM busybox:1.25.0

WORKDIR /root

COPY --from=builderapp /usr/local/go/src/fullcycle ./

CMD [ "./fullcycle" ]
FROM golang:1.15

ARG GO_ENV

ENV GO111MODULE=on \
    CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64

WORKDIR /nakamakan

COPY go.mod .
COPY go.sum .
RUN go mod download

# install air - on dev only

RUN if [ "$GO_ENV" = "dev" ] ;\
    then apt update && apt upgrade -y && \
    apt install -y git ;\
    fi

RUN if [ "${GO_ENV}" = "dev" ] ;\
    then curl -fLo install.sh https://raw.githubusercontent.com/cosmtrek/air/master/install.sh \
    && chmod +x install.sh && sh install.sh && cp ./bin/air /bin/air && echo "air installed" ;\
    fi

COPY . .

# create dist folder and move migrations there
RUN if [ "${GO_ENV}" = "prod" ] ;\
    then go build . && mkdir /dist && mkdir /dist/cli_tools && cp /nakamakan/cli_tools/migrate.linux-amd64 /dist/cli_tools/migrate.linux-amd64 && cp -R /nakamakan/migrations /dist/migrations ;\
    fi

# copy env and binary to dist folder
RUN if [ "${GO_ENV}" = "prod" ] ;\
    then cp /nakamakan/.env /dist/.env && cp /nakamakan/nakamakan_service /dist/nakamakan_service && rm -rf /nakamakan/ ;\
    fi

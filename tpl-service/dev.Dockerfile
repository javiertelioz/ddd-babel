FROM node:14.16.0-alpine3.12

WORKDIR /src

COPY package*.json ./

# Install App & dependencies
RUN apk add --no-cache --virtual .build-deps &&\
    npm install nodemon pm2 -g && \
    npm install --silent && \
    npm cache clean --force && \
    apk del .build-deps && \
    rm -rf \
        /usr/share/man/* \
        /usr/includes/* \
        /var/cache/apk/* \
        /root/.npm/* \
        /usr/lib/node_modules/npm/man/* \
        /usr/lib/node_modules/npm/doc/* \
        /usr/lib/node_modules/npm/html/* \
        /usr/lib/node_modules/npm/scripts/*

# Copy app source code
COPY . .

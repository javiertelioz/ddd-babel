FROM node:14.16.0-alpine3.12

ENV NODE_ENV production

WORKDIR /src

COPY package*.json ./

# Install App & dependencies
RUN apk add --no-cache --virtual .build-deps &&\
    npm install pm2 -g && \
    npm install --production --silent && \
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

CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]

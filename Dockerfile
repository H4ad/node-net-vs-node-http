FROM node:20-alpine

WORKDIR /usr/src/app

COPY index.mjs index.mjs

ENTRYPOINT [ "node", "index.mjs" ]
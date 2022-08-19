FROM node:alpine

RUN apk add git && npm i -g @nestjs/cli

USER node

WORKDIR /home/node/app

CMD ["/home/node/app/start.sh"]

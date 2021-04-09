FROM node:alpine
WORKDIR /usr/app
COPY package.json .
RUN yarn install\
    && yarn install typescript -g
COPY . .
RUN yarn build
CMD ["yarn", "start:prod"]

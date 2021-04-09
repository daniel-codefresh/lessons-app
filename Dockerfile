FROM node:alpine
WORKDIR /usr/app
COPY package.json .
RUN yarn install\
    && yarn install tsc -g
COPY . .
RUN yarn build
CMD ["yarn", "start:prod"]

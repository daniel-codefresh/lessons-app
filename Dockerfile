FROM node:alpine
WORKDIR /usr/app
COPY package.json .
RUN yarn install\
    && yarn global add typescript
COPY . .
RUN yarn build
CMD ["yarn", "start:prod"]

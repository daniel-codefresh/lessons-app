FROM node:alpine
WORKDIR /usr/app
COPY package.json yarn.lock ./
RUN yarn --pure-lockfile\
    && yarn global add typescript --pure-lockfile
ADD ./ ./
RUN yarn build
EXPOSE 9000
CMD ["yarn", "start:prod"]

FROM node:alpine
WORKDIR /usr/app
COPY package.json yarn.lock ./
RUN yarn --pure-lockfile\
    && yarn global add typescript --pure-lockfile
ADD ./ ./
RUN ls
RUN yarn build
CMD ["yarn", "start:prod"]

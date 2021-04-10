FROM node:alpine
WORKDIR /usr/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install\
    && yarn global add typescript
ADD ./ ./
RUN ls
RUN yarn build
CMD ["yarn", "start:prod"]

FROM node:18-alpine
COPY ../../frontend/package.json /frontend/
COPY ../../frontend/yarn.lock /frontend/
WORKDIR /frontend
RUN yarn install

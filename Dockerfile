FROM node:10.16.3

ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

COPY package*.json $APP_HOME/
RUN npm install

COPY . $APP_HOME

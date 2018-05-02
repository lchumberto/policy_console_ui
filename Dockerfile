#FROM node:8 as builder
#
#WORKDIR /usr/src/app/
#
#COPY package*.json ./
#
#RUN npm install --production
#
#COPY ./ ./
#
#RUN npm run build


FROM nginx:stable

LABEL maintainer='klau@bluecedar.com'

RUN rm -rf /etc/nginx/conf.d/*

RUN rm -rf /usr/share/nginx/html/*

COPY default.conf /etc/nginx/conf.d/

COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html/
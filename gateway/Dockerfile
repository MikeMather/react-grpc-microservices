FROM node:10
COPY ./gateway /server/
COPY ./protos /server/protos
WORKDIR /server
RUN npm install
EXPOSE 8080
CMD ["node", "index.js"]
FROM node:10
COPY ./cartService /server/
COPY ./protos /server/protos
WORKDIR /server
RUN npm install
EXPOSE 5001
CMD ["node", "index.js"]
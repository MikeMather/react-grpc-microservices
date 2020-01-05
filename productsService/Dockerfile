FROM node:10
COPY ./productsService /server/
COPY ./protos /server/protos
WORKDIR /server
RUN npm install
EXPOSE 5000
CMD ["node", "index.js"]
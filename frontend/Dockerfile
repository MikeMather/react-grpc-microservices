# Build the app in a node container
FROM node:latest as reactbuild
COPY . .
RUN npm install && npm run build

# Setup the nginx container and copy over our build files
FROM nginx:latest

COPY --from=reactbuild /build /user/share/nginx/html
COPY /build /usr/share/nginx/html
COPY ./proxy.conf /etc/nginx/conf.d/default.conf

VOLUME /usr/share/nginx/html
VOLUME /etc/nginx
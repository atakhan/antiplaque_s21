FROM node:lts-alpine
ENV NODE_ENV=development
WORKDIR /opt/app/services/js_levi_test
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
EXPOSE 3000
RUN chown -R node /opt/app/services/js_levi_test
USER node
CMD ["npx", "nodemon", "app.js"]
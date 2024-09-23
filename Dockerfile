FROM node:latest
LABEL authors="defaultuser0"

COPY package*.json ./
RUN npm install

COPY ./ ./dist

CMD ["npm", "run", "start"]
EXPOSE 5000
ENTRYPOINT ["top", "-b"]
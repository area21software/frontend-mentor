FROM node:18-alpine

WORKDIR /app

COPY . /app

RUN npm run install-server
CMD ["npm", "run", "dev-server" ]

EXPOSE 8000
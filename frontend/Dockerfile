FROM node:8.1.2

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . /app

EXPOSE 3000

CMD ["npm", "run", "dev"]

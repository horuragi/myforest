FROM node:12.18.0

# Create Work Directory
WORKDIR /app

# npm install
COPY package*.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

# Docker Demon Port Mapping
EXPOSE 80

CMD npm run start

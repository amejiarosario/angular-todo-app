FROM node:12-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --production
COPY . .
CMD ["npm", "start"]

# This App

# docker build -t angular-todo-app .
# docker run -dp 3737:3000 angular-todo-app
# http://localhost:3737/

# MongoDB

# standalone
# docker run --name some-mongo -d mongo
# docker exec -ti some-mongo mongo

# on network
# docker run -d \
#   --network angular-todo-app \
#   --network-alias mongohost \
#   mongo

# Mongo + App

# docker run -dp 3737:3000 \
#   -w /app -v (PWD):/app \
#   --network angular-todo-app \
#   -e MONGO_HOST=mongohost \
#   node:12-alpine \
#   sh -c "npm i && npm start"
# http://localhost:3737/

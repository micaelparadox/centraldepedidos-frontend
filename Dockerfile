# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the Vue.js application
RUN npm run build

# Specify the runtime command
CMD ["npm", "run", "serve"]

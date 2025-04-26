# Use Node.js 18 LTS as base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all backend source code
COPY . .

# ✅ Expose port before running
EXPOSE 4000

# Start the server
CMD ["node", "server.js"]

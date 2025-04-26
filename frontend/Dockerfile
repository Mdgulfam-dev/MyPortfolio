# Use Node.js 18 LTS as base image
FROM node:18 AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install 

# Copy all source files and build
COPY . . 
RUN npm run build 

# ✅ Serve with Nginx
FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html

# Expose frontend on port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

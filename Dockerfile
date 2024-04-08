# Stage 1: Build the application
FROM node:latest as build-stage

WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine as production-stage

# Copy built assets from the build-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to access the container
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

# Step 1: Use an official Node.js runtime as a parent image
FROM node:18-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of your app's source code
COPY . .

# Build your Next.js application
RUN yarn build

# Step 2: Use the official lightweight Node.js runtime as a parent image for the production environment
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built assets and necessary files from the builder stage
COPY --from=builder /app/package.json ./package.json
# If you have next.config.js, uncomment the next line
# COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Expose the port Next.js runs on
EXPOSE 3000

# Command to run your app
CMD ["yarn", "start"]

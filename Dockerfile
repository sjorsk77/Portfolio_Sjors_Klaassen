# Step 1: Build the React app
FROM node:20.14.0 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of your app's source code
COPY . .

# Build the React app
RUN npm run build

# Step 2: Set up NGINX to serve the build
FROM nginx:alpine

# Copy the build output from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy the custom NGINX config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start NGINX in the foreground (daemon off)
CMD ["nginx", "-g", "daemon off;"]

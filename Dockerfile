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

# Step 2: Set up Serve to serve the build
FROM node:20.14.0 AS serve

# Install serve globally
RUN npm install -g serve

# Set the working directory to the build folder
WORKDIR /app/build

# Copy the build output from the previous stage
COPY --from=build /app/build /app/build

# Expose port 80
EXPOSE 80

# Start the React app using serve
CMD ["serve", "-s", ".", "-l", "80"]

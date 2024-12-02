# Use an official Nginx image as a base image
FROM nginx:alpine

# Install Certbot and Nginx plugin for Certbot
RUN apk update && apk add --no-cache certbot certbot-nginx

# Copy your custom Nginx config from the project root
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the static web assets (adjust this as per your app's build output)
COPY ./build /usr/share/nginx/html

# Expose ports 80 (HTTP) and 443 (HTTPS)
EXPOSE 80 443

# Command to start Nginx and Certbot
CMD ["sh", "-c", "nginx -g 'daemon off;'"]

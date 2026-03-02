# Use a lightweight Nginx image to serve static content
FROM nginx:alpine

# Copy the static website files to the default nginx public directory
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

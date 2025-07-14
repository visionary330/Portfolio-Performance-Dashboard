# Step 1: Build the React app
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve the app with Nginx
FROM nginx:alpine

# Copy build output to Nginx's public folder
COPY --from=build /app/build /usr/share/nginx/html

# Optional: replace Nginx config
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

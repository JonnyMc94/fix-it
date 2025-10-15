# Start from a lightweight Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your server code
COPY . .

# Expose backend port
EXPOSE 5000

# Environment
ENV NODE_ENV=production


#Running check to see confirm environment variables have been loaded
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]

# Start the backend
CMD ["npm", "run", "start"]
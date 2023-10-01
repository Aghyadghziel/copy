# Base Image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
# Setting the production environment ensures that only production dependencies are installed
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Expose the default port for Next.js
EXPOSE 3000

# Start the production server
CMD ["npm", "start"]

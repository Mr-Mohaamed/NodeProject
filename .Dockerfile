# Use the latest stable Node.js (22) image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy only dependency files first
COPY package*.json ./

# Install only production dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port (change if needed)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

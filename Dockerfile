FROM node:18-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --no-frozen-lockfile

# Copy all files
COPY . .

# Build the application
RUN pnpm run build

# Install serve to serve static files
RUN npm install -g serve

EXPOSE 3000

# Serve the static build
CMD ["serve", "-s", "out", "-l", "3000"]

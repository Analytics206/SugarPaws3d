# syntax=docker/dockerfile:1

# Base image for consistent Node version
FROM node:22-slim AS base
WORKDIR /app

# Install dependencies separately to leverage caching
FROM base AS deps
COPY package.json package-lock.json* ./
RUN set -eux; \
    if [ -f package-lock.json ]; then npm ci; \
    else npm install; fi

# Build and export static site
FROM base AS builder
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Development image (hot reload)
FROM node:22-slim AS dev
WORKDIR /app
ENV NODE_ENV=development
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Production static server
FROM nginx:1.27-alpine AS runner
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

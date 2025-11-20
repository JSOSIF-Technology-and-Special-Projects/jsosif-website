# ---------- Build stage ----------
FROM node:22-alpine AS builder

ENV NODE_ENV=production

WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build Next.js app
RUN npm run build

# ---------- Run stage ----------
FROM node:22-alpine AS runner

ENV NODE_ENV=production
WORKDIR /app

# Install only production deps
COPY package*.json ./
RUN npm install --omit=dev

# Copy built app
COPY --from=builder /app ./

# Cloud Run injects PORT; Next respects it
ENV PORT=8080
EXPOSE 8080

CMD ["npm", "start"]

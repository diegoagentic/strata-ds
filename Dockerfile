FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts

# Copy server source and governance
COPY src/mcp-server/ ./src/mcp-server/
COPY governance/ ./governance/

# Governance path relative to /app
ENV GOVERNANCE_PATH=/app/governance
ENV PORT=3001

EXPOSE 3001

CMD ["npx", "tsx", "src/mcp-server/mcp-http.ts"]

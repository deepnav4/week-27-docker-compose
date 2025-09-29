FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV DATABASE_URL="postgresql://postgres:mysecretpassword@postgres:5432/postgres"

# Generate Prisma client at build time
RUN npx prisma generate

# Build the app
RUN npm run build

# Run migrations when container starts, then start the app
CMD npx prisma migrate dev && npm start

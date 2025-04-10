# l'image de base Node.js
FROM node:23-slim AS builder

WORKDIR /app

COPY package.json ./
COPY .env ./
RUN npm install

COPY . .

RUN npm run build

# Étape 2 : Serveur Nginx pour la prod
FROM nginx:1.27-alpine-slim


COPY --from=builder /app/dist /usr/share/nginx/html

# Copie de config custom 
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

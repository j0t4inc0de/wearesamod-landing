# Stage 1: Build application
FROM node:20-alpine AS build-stage
ARG VITE_N8N_WEBHOOK_URL
ENV VITE_N8N_WEBHOOK_URL=$VITE_N8N_WEBHOOK_URL
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve application using Nginx
FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

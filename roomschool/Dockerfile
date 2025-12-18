FROM node:22-alpine

WORKDIR /app

# Копируем package.json и ставим зависимости
COPY package*.json ./
RUN npm install

# Копируем проект и собираем его
COPY . .
RUN npm run build

# Открываем порт и запускаем
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
# Используем официальный образ Node.js
FROM node:22-alpine

# Устанавливаем рабочую директорию
WORKDIR /opt/app/services/adminka/client

# Копируем package.json и устанавливаем зависимости
COPY package.json ./
RUN npm install

# Копируем остальные файлы
COPY . .

# Указываем порт, который будет использоваться
EXPOSE 8080

# Собираем приложение
RUN npm run build

# Указываем команду для запуска
CMD ["npm", "run", "serve"]
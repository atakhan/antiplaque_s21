# Используем официальный образ Node.js
FROM node:14

# Устанавливаем рабочую директорию
WORKDIR /opt/app/services/adminka/server

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы
COPY . .

# Указываем порт, который будет использоваться
EXPOSE 5000

# Запускаем сервер
CMD ["node", "server.js"]
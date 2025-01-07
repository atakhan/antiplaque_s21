const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Импортируем маршруты

const app = express();
const PORT = process.env.PORT || 3000; // Порт, на котором будет работать сервер

// Middleware для парсинга JSON
app.use(bodyParser.json());

// Подключаем маршруты
app.use('/api/moderation', routes);

// Обработка ошибок
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Что-то пошло не так!');
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
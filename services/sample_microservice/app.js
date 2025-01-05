const express = require('express')
const app = express()
const port = 3000;

// Middleware для парсинга JSON
app.use(express.json());

// Функция для вычисления расстояния Левенштейна
function levenshtein(a, b) {
    const matrix = [];

    // Инициализация матрицы
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Заполнение матрицы
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // замена
                    Math.min(matrix[i][j - 1] + 1, // вставка
                              matrix[i - 1][j] + 1) // удаление
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

// 
app.get('/', (req, res) => {
    res.json({
        status: 200, 
        message: `Это успешный ответ от API тестового микросервиса, на GET запрос по адресу http://localhost:${port}`,
        data: [
            `мы вольны определять наши структуры ответов. Этот ответ и есть пример, как можно его сделать`,
            `чаще всего используют три свойства: `,
            [
                'status - чтобы сообщить код HTTP',
                'message - дополнительная инфа к статусу',
                'data - тут уже полезная информация - данные. Тут тоже можно делать произвольную структуру'
            ]
        ]
    });
})

// API метод для вычисления расстояния Левенштейна
/**
 * @
 */
app.post('/api/levi', (req, res) => {
    const { str1, str2 } = req.body;
    if (!str1 || !str2) {
        return res.status(400).json({ error: 'Both strings are required' });
    }
    const distance = levenshtein(str1, str2);
    res.json({ distance });
});

// API метод для вычисления расстояния Левенштейна
app.get('/api/levi/:str1/:str2', (req, res) => {
    const { str1, str2 } = req.params;
    if (!str1 || !str2) {
        return res.status(400).json({ error: 'Both strings are required' });
    }
    const distance = levenshtein(str1, str2);
    res.json({ distance });
})
app.get('/api/levi', (req, res) => {
    return res.json({});
});


// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
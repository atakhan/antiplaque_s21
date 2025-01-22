const express = require('express');
const router = express.Router();
const { getAllPosts, approvePost, blockPost } = require('./dataService');

// Обработка GET-запроса на корневой маршрут
router.get('/', (req, res) => {
    const posts = getAllPosts();
    console.log(posts);
    res.json(posts);
});

// Обработка POST-запроса для утверждения поста
router.get('/approve/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = approvePost(id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

// Обработка POST-запроса для утверждения поста
router.post('/approve/:id', (req, res) => {
    console.log("try to output approve req");
    const id = parseInt(req.params.id); // Извлечение id из параметров
    console.log(`ID: ${id}`); // Логирование id для отладки
    // const id = parseInt(req.params.id);
    // const item = approvePost(id);
    // if (item) {
    //     res.json(item);
    // } else {
    //     res.status(404).send('Item not found');
    // }
});

// Обработка POST-запроса для блокировки поста
router.post('/block/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = blockPost(id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();

let data = JSON.stringify([
    { id: 1, content: 'Проект 1', approved: false },
    { id: 2, content: 'Проект 2', approved: false },
]);

router.get('/', (req, res) => {
    res.json(data);
});

router.post('/approve/:id', (req, res) => {
    const item = data.find(d => d.id === parseInt(req.params.id));
    if (item) {
        item.approved = true;
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

router.post('/block/:id', (req, res) => {
    const item = data.find(d => d.id === parseInt(req.params.id));
    if (item) {
        item.approved = false;
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

module.exports = router;
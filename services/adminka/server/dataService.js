const Post = require('./dataModel');

let data = [
    new Post(1, 'Проект 1', false),
    new Post(2, 'Проект 2', false),
];

// Получение всех постов
const getAllPosts = () => {
    return {
        data: data
    };
};

// Утверждение поста по ID
const approvePost = (id) => {
    const item = data.find(d => d.id === id);
    if (item) {
        item.approved = true;
        return item;
    }
    return null;
};

// Блокировка поста по ID
const blockPost = (id) => {
    const item = data.find(d => d.id === id);
    if (item) {
        item.approved = false;
        return item;
    }
    return null;
};

module.exports = {
    getAllPosts,
    approvePost,
    blockPost,
};
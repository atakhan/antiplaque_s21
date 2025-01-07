// Определяем интерфейс для поста
class Post {
    constructor(id, content, approved) {
        this.id = id;
        this.content = content;
        this.approved = approved;
    }
}

module.exports = Post;
import psycopg2

# Подключение к существующей базе данных
conn = psycopg2.connect(
    dbname='github_projects',
    user='franchel',
    host='postgres_container',
    port='5432'
)

# Создание курсора
cur = conn.cursor()

# Создание таблицы, если она не существует
cur.execute("""
CREATE TABLE IF NOT EXISTS search_parameters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    full_name TEXT NOT NULL,
    private BOOLEAN NOT NULL,
    html_url VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    size INTEGER NOT NULL,
    language VARCHAR(255) NOT NULL,
    topics TEXT NOT NULL,
    default_branch VARCHAR(256) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    downloaded BOOLEAN NOT NULL
);
""")

# Параметры для вставки (пример данных)
projects = [
    ('Project1', 'Full Project Name 1', False, 'http://example.com/1', 'Description of project 1', 150, 'Python', 'topic1, topic2', 'main', '2025-01-01 12:00:00', '2025-01-02 12:00:00', False),
    ('Project2', 'Full Project Name 2', True, 'http://example.com/2', 'Description of project 2', 200, 'Java', 'topic3, topic4', 'main', '2025-01-01 12:00:00', '2025-01-02 12:00:00', True),
]

# Вставка параметров в таблицу
for project in projects:
    cur.execute(
        """
        INSERT INTO search_parameters (name, full_name, private, html_url, description, size, language, topics, default_branch, created_at, updated_at, downloaded)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """,
        project
    )

# Сохранение изменений и закрытие соединения
conn.commit()
cur.close()
conn.close()
import psycopg2

print("Запуск скрипта...")

try:
    # Подключение к базе данных
    conn = psycopg2.connect(
        dbname='github_projects',
        user='franchel',
        host='postgres_container',
        port='5432'
    )
    print("Подключение к базе данных успешно.")

    # Создание курсора
    cur = conn.cursor()
    print("Курсор создан.")

    # Проверка текущей базы данных
    cur.execute("SELECT current_database();")
    current_db = cur.fetchone()
    print(f"Текущая база данных: {current_db[0]}")

    # Получение списка всех таблиц
    cur.execute("select * from search_parameters;")
    tables = cur.fetchall()
    
    print("Список всех таблиц:")
    for schema, table in tables:
        print(f"Схема: {schema}, Таблица: {table}")

    # Попытка выполнить запрос к таблице
    cur.execute('SELECT * FROM "search_parameters";')  # Используйте кавычки, если имя таблицы чувствительно к регистру
    rows = cur.fetchall()
    print(f"Получено {len(rows)} записей из таблицы 'search_parameters'.")

except Exception as e:
    print(f"Произошла ошибка: {e}")

finally:
    if cur:
        cur.close()
        print("Курсор закрыт.")
    if conn:
        conn.close()
        print("Соединение с базой данных закрыто.")

print("Скрипт завершен.")
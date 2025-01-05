# Используем официальный образ Python
FROM python:3.11-slim

# Устанавливаем переменную окружения для режима разработки
ENV NODE_ENV=development

# Устанавливаем рабочую директорию
WORKDIR /opt/app/services/search_s21_projects_in_github

# Копируем файл зависимостей
COPY ["requirements.txt", "./"]

# Устанавливаем зависимости
RUN pip install --no-cache-dir -r requirements.txt

# Копируем код приложения
COPY . .

# Открываем порт, на котором будет работать приложение
EXPOSE 3001

# Команда для запуска приложения
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "3001"]
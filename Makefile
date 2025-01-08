rebuild:
	docker compose down --rmi all
	docker compose up --build

up:
	docker compose up --build

down:
	docker compose down --rmi all

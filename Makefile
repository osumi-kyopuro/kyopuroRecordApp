sleep-and-migrate-up:
	sleep 40;migrate --path db/migrate --database 'mysql://root:mysql@tcp(localhost:3306)/db' up


migrate-up: 
	migrate --path db/migrate --database 'mysql://root:mysql@tcp(localhost:3306)/db' up

migrate-down:
	migrate --path db/migrate --database 'mysql://root:mysql@tcp(localhost:3306)/db' down
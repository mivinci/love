package db

import (
	"database/sql"
)

var (
	DB          *sql.DB
	DBConnCount int
)

func init() {
	// dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/love", os.Getenv("DB_USER"), os.Getenv("DB_PASSWORD"), os.Getenv("DB_HOST"), os.Getenv("DB_PORT"))
	// if DB, err = sql.Open("mysql", dsn); err == nil {
	// 	DBConnCount++
	// }
	DBConnCount++
}

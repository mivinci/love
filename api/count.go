package api

import (
	"fmt"
	"net/http"

	"github.com/mivinci/lover/db"
)

func Count(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, db.DBConnCount)
}

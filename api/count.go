package api

import (
	"fmt"
	"net/http"
)

var count int

func init() {
	count = 0
}

func Count(w http.ResponseWriter, r *http.Request) {
	count++
	fmt.Fprintf(w, "%d", count)
}

package main

import (
	"nakamakan_service/config"
	"net/http"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

var configuration config.Configuration

func init() {
	configuration = config.LoadEnvVariables()
}

func main() {
	e := echo.New()

	// middleware setup
	e.Use(middleware.Logger())

	e.GET("/", hello)

	if configuration.App.UseTLS {
		e.Logger.Fatal(e.StartAutoTLS(":" + configuration.App.TLSPort))
	} else {
		e.Logger.Fatal(e.Start(":" + configuration.App.NonTLSPort))
	}

}

func hello(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!lalala")
}

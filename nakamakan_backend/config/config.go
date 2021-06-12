package config

import (
	"log"
	"os"
	"strconv"
	"sync"

	"github.com/joho/godotenv"
)

type Configuration struct {
	App struct {
		UseTLS     bool
		TLSPort    string
		NonTLSPort string
	}
	Storage struct {
		DB struct {
			Username         string
			Password         string
			Host             string
			DatabaseName     string
			Port             string
			ConnectionString string
		}
	}
}

var (
	config     Configuration
	configOnce sync.Once
)

func LoadEnvVariables() Configuration {
	configOnce.Do(func() {
		err := godotenv.Load(".env")

		if err != nil {
			log.Fatalf("Error loading .env file")
		}

		useTLS, _ := strconv.ParseBool(os.Getenv("USE_TLS"))
		tlsPort := os.Getenv("APP_TLS_PORT")
		nonTlsPort := os.Getenv("APP_NON_TLS_PORT")

		username := os.Getenv("DB_USERNAME")
		password := os.Getenv("DB_PASSWORD")
		host := os.Getenv("DB_HOST")
		dbName := os.Getenv("DB_NAME")
		port := os.Getenv("DB_PORT")
		charset := "utf8mb4"
		collation := "utf8mb4_unicode_ci"
		connectionString := username + ":" + password + "@tcp(" + host + ":" + port + ")/" + dbName + "?charset=" + charset + "&collation=" + collation

		config = Configuration{
			App: struct {
				UseTLS     bool
				TLSPort    string
				NonTLSPort string
			}{
				UseTLS:     useTLS,
				TLSPort:    tlsPort,
				NonTLSPort: nonTlsPort,
			},
			Storage: struct {
				DB struct {
					Username         string
					Password         string
					Host             string
					DatabaseName     string
					Port             string
					ConnectionString string
				}
			}{
				DB: struct {
					Username         string
					Password         string
					Host             string
					DatabaseName     string
					Port             string
					ConnectionString string
				}{
					Username:         username,
					Password:         password,
					Host:             host,
					DatabaseName:     dbName,
					Port:             port,
					ConnectionString: connectionString,
				},
			}}
	})

	return config
}

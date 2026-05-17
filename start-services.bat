@echo off

start cmd /k "cd discovery-service && mvnw.cmd spring-boot:run"

timeout /t 10

start cmd /k "cd api-gateway && mvnw.cmd spring-boot:run"

start cmd /k "cd auth-service && mvnw.cmd spring-boot:run"

start cmd /k "cd inventory-service && mvnw.cmd spring-boot:run"

start cmd /k "cd order-service && mvnw.cmd spring-boot:run"

start cmd /k "cd shipment-service && mvnw.cmd spring-boot:run"

start cmd /k "cd smartlogix-frontend && pnpm dev"
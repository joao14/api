# API BACKEND PROJECT

Create api to backend

1. Before running de project add in the root of the project the file .env with the next environments:
    -   PORT=8080
    -   NODE_ENV=development
    -   URL_FILES="https://echo-serv.tbxnet.com/v1/secret/files"
    -   URL_FILE="https://echo-serv.tbxnet.com/v1/secret/file/"
    -   SECRET_KEY= --put secret of the private swagger withouth Bearer --

2. To run the proyect please execute the next commands:
    -   npm start 
    -   npm test

3. To create a docker imagen, please execute in the root project the next commands:

    -   docker build -t api:latest .
    -   docker run -p 8080:8080 api:latest

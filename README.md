Tehno-Shop

Для запуска необходимо: 
  - скачать рекомендованную (LTS) версию NodeJS
  - скачать программу управления базами данных PostGreSQL
  - скачать дамп базы данных online_store.exe
  - импортировать базу данных в PostGreSQL
  - в IDE через терминал установить все необходимые зависимости:
    - BE: bcrypt, cors, dotenv, express, express-fileupload, jsonwebtoken, pg, pg-hstore, sequelize, uuid, nodemon
    - FE: axios, bootstrap, dotenv, jwt-decode, mobx, mobx-react-lite, react, react-bootstrap, react-dom, react-router-dom
    
Запуск сервера:
  - в терминале в корневой директории вводим "cd server"
  - затем вводим "npm run dev"

Запуск клиента:
  - в терминале в корневой директории вводим "cd client"
  - затем вводим "npm start"
  

Описание:
Hardware store. Technology stack: BackEnd - NodeJS, Express, PostGreSQL, Nodemon, Sequelize, Cors, Bcrypt, Dotenv, JWT; FrontEnd - HTML, SCSS, JS, React, React Bootstrap, Axios, Mobx. Hardware store: you can view products, filter them by type and by brand, view detailed characteristics of each product. If you are registered and logged in, you can add products to your basket, as well as delete them from there. If you are logged into your account as an admin, then you have an admin panel, that will allow you to add new types, brands, as well as new products (also adding unique characteristics by them) and delete them from store.

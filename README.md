
# Spotech

## Description

An ecommerce store built with MERN stack. This ecommerce store enable three main different flows or implementations:

1. Buyers browse the store categories, products and brands
2. Sellers or Merchants manage their own brand component
3. Admins manage and control the entire store components 


* features:
  * Node provides the backend environment for this application
  * Express middleware is used to handle requests, routes
  * Mongoose schemas to model the application data


## Database Seed

* The seed command will create an admin user in the database
* The email and password are passed with the command as arguments
* Like below command, replace brackets with email and password. 
* For more information, see code [here](server/utils/seed.js)

```
npm run seed:db [email-***@****.com] [password-******] // This is just an example.
```

## Demo

This application is deployed on Render Please check it out :smile: [here](link).

See admin dashboard [demo](link)

## Install

Some basic Git commands are:

```
$ git clone https://github.com/No-Country/C10-G31-ft-mern.git
$ cd C10-G31-ft-mern
```

## Setup

```
 Create .env file that include:
  * MONGO_URI & JWT_SECRET
  * PORT & BASE_SERVER_URL & BASE_API_URL & BASE_CLIENT_URL
```

## Start development

```
$ npm run dev
```

## Simple build for production

```
$ npm run build:app
$ npm run build:server
```

## Run build for production

```
$ npm start
```


## Languages & tools

- [Node](https://nodejs.org/en/)

- [Express](https://expressjs.com/)

- [Mongoose](https://mongoosejs.com/)

- [React](https://reactjs.org/)

- [NextJS](https://nextjs.org/)



# Readme - Categorías
# Documentación de API

Esta API provee los siguientes endpoints para realizar operaciones con productos, categorías y usuarios.

## Autenticación
La autenticación en los endpoints privados se realiza a través de un token JWT y unicamente por el rol "admin". Este token debe ser proporcionado en el encabezado Authorization de la solicitud en el siguiente formato:

Authorization: Bearer <token>

## Usuarios

### Endpoints Públicos
POST /api/v1/user/auth --> Autentica a un usuario y devuelve un token JWT. el usuario maneja los roles "admin", "client" y "seller". la autenticación se maneja por el role "admin" del usuario, por defecto un nuevo usuario se cargará como cliente.

ejemplo de respuesta: 

token: "",
name:"",
email: "",
role:"admin" ó "client"
## Endpoints Privados

POST /api/v1/user

Crea un nuevo usuario. Requiere autenticación y rol de administrador.

GET /api/v1/user

Devuelve todos los usuarios. Requiere autenticación y rol de administrador.

GET /api/v1/user/:userId

Devuelve el usuario correspondiente al userId. Requiere autenticación y rol de administrador.

PATCH /api/v1/user/:userId

Actualiza el usuario correspondiente al userId. Requiere autenticación y rol de administrador.

DELETE /api/v1/user/:userId

Elimina el usuario correspondiente al userId. Requiere autenticación y rol de administrador.

## Categorías
### Endpoints Públicos

GET /api/v1/category

Devuelve todas las categorías.

GET /api/v1/category/name

Devuelve las categorías que coinciden con el nombre proporcionado.

GET /api/v1/category/:categoryId

Devuelve la categoría correspondiente al categoryId.

### Endpoints Privados

POST /api/v1/category

Crea una nueva categoría. Requiere autenticación.

PATCH /api/v1/category/:categoryId

Actualiza la categoría correspondiente al categoryId. Requiere autenticación.

DELETE /api/v1/category/:categoryId

Elimina la categoría correspondiente al categoryId. Requiere autenticación.

## Productos

### Endpoints Públicos

GET /api/v1/product

Devuelve todos los productos.

GET /api/v1/product/name?

Devuelve los productos que coinciden con el nombre proporcionado.

GET /api/v1/product/:id

Devuelve el producto correspondiente al id.
### Endpoints Privados

POST /api/v1/product

Crea un nuevo producto. Requiere autenticación.

PATCH /api/v1/product/:id

Actualiza el producto correspondiente al id. Requiere autenticación.

DELETE /api/v1/product/:id

Elimina el producto correspondiente al id. Requiere autenticación.

## Errores
La API devuelve los siguientes códigos de respuesta y mensajes de error:

400 Bad Request: Se produjo un error en la solicitud.
401 Unauthorized: No se proporcionó un token de autenticación válido.
403 Forbidden: El usuario no tiene los permisos necesarios para realizar la operación.
404 Not Found: El recurso solicitado no fue encontrado.
500 Internal Server Error: Se produjo un error interno en el servidor.
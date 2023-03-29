
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

- [Webpack](https://webpack.js.org/)

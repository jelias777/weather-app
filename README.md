# Weather Application

Example of an asynchronous node.js application, use of handlebars and express

## Requirements

- node.js 12.*
- npm 6.*

## Dependencies

- express 4.17.1
- hbs 4.1.1
- properties-reader 2.0.0
- properties-file 1.0.0
- request 2.88.2

## Building

Install the dependencies before start:

```sh
$ cd async-node-express-hbs
$ sudo npm install
```

## APIs

Before you start the application you need to create an account in:

- WeatherStack: https://weatherstack.com/
- Mapbox: https://www.mapbox.com/

This API's are used to get realtime data to the application. After that you need to set the keys in the _app.properties_ file using the variables _weatherstack.key_ & _mapbox.key_

## Run the Application

```sh
$ npm start
```

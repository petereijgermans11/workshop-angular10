# C05

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0-next.0.

## Development server
This project consists of two parts:
- a server (with `json-server`) that is capturing the CRUD requests (b/c browsers cannot look outside their own scope).
This server updates a small file, called `cities.json`.
- a client : start it in the usual way with `npm start`.

## How to use
- Do a regular `npm install`.
- First, start the server by running `npm run json-server`.
- Open a new Terminal window, or command prompt.
- Second, start the client by running `npm start`.
- Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Resetting the cities
- If you have accidentally deleted all cities (remember, the CRUD-server really does a destructive update on the .json-file) you can restore
it by copying the contents of `cities-original.json` to `cities.json`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Project Eischied

A boilerplate MEAN Stack demo for a web based, multi-API application. Named after the 70's TV Show "Eischeid" staring Joe Don Baker.

This library has two main components, the backend pages/API and public HTML.

The example API included is written in NodeJS using Express 4.x+ with Pug Templating.

The front end usues current Angular (5.x) based application UI using JQuery and Bootstrap CSS.

Back and forth communication from the UI to the backend is accomplished via a RESTful services API.

This project is based off the excellent Hackathon Starter Project (https://github.com/sahat/hackathon-starter).

## NOTE

This project is a current standards version of the Eischied Project. It uses the current versions of Express, Pug 
Templates Boostrap and Angular (5.x)

## Components

- *Server*: Express 4
- *Templatting*: Pug 2
- *JS Framework*: Angular 5
- *CSS Framework*: Boostrap 3

## Requirements

- NodeJs 8.x +
- MongoDB 2.x +

## Set up the project

```sh
$ git clone git://github.com/jfox015/Eischied-Angular
$ cd Eischied-Angular
$ npm install
```

## Launch MongoDB then the server

Make sure your local copy of MongoDB is running. Then run the following command to build the Angular code and start the site.

```sh
$ npm start
```

Browse to http://localhost:3000 to run.

## To update and rebuild the CSS

If Gulp is not installed, install Gulp

```sh
$ npm install gulp-cli -g
$ npm install gulp -D
```

Then run the SaSS commands in Gulp:

```sh
$ gulp runsass
```

This will build and save the update CSS to the `/public/css folder` as `main.min.css` and `admin.min.css`.

## Error Note

If you received the following error:

```sh
$ Error: Cannot find module 'mongodb/node_modules/bson
```

Do the following:

```sh
npm install -g node-gyp 
cd /to/your/project-folder
rm -rf node_modules
npm install
```
# Youtube Clone
[![Build Status](https://travis-ci.org/sharad-s/youtube-react.svg?branch=master)](https://travis-ci.org/sharad-s/youtube-react)

Demo React Project for Pizza Hut Interview. 
Search and Watch videos from Youtube in a clean, easy-to-use interface.

Makes use of: 
 - React
 - Youtube API
 - SemanticUI CSS
 - Docker & Docker-compose
 - Jest/Enzyme for Unit Testing
 - Travis CI
 - AWS ElasticBeanstalk

## Getting Started 

You can use NPM/Yarn to install and start the project
```sh
git clone https://github.com/sharad-s/react-demo
cd react-demo
npm install
npm start
```

Alternatively, you can use Docker & docker-compose to run the project
```sh
git clone https://github.com/sharad-s/react-demo
cd react-demo
docker-compose up --build
```

### Configure app

Copy `.env.sample.local` to `.env.local` then edit it with a Youtube API Key. 

## Run Unit Tests
Unit tests for Components are written in Jest and Enzyme.

Run unit tests using NPM/Yarn
```sh
 npm test
```

Run unit tests using Docker/docker-compose.
```sh
 docker-compose up
```

---

## Languages & tools

### HTML

- [Jade](http://jade-lang.com/) for some templating.

### JavaScript

- [JSHint](http://www.jshint.com/docs/) is used to prevent JavaScript error.
- [JSCS](https://npmjs.org/package/jscs) is used to check coding conventions.
- [Browserify](http://browserify.org/) to handle allow us to write our client-side scripts with [es6 syntax](http://es6.github.io/) thanks to [es6ify](https://github.com/thlorenz/es6ify).
- [React](http://facebook.github.io/react) is used for UI.

### CSS

- [cssnext](http://cssnext.putaindecode.io) is used to write futureproof CSS for CSS vendor prefix under the hood).

_Autoprefixer_ is included and use [caniuse.com](http://caniuse.com/) database to avoid outdated prefixes. _You can forget CSS prefixes NOW._

### Static server with Livereload

The app embed for development a static connect server with livereload plugged.
So each time you start the app, you get automatic refresh in the browser whenever you update a file.

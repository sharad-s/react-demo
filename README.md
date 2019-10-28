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
- [JSX](https://reactjs.org/docs/introducing-jsx.html) for templating.

### JavaScript
- [React](http://facebook.github.io/react)
- [Axios](https://www.npmjs.com/package/axios) is used for making API calls.
- [Youtube Data API](https://developers.google.com/youtube/v3) is used for Youtube Integration.

### CSS
- [SemanticUI](https://semantic-ui.com/) is used to style the UI. 
- [FontAwesome](https://fontawesome.com) is used for icons.

## Testing
- [Jest/Enzyme](https://airbnb.io/enzyme/docs/guides/jest.html) is used for Unit Testing components.

## CI/CD
- [Git](https://git-scm.com/) is used for version control.
- [Docker & Docker-compose](https://www.docker.com/) is used to containerize the app for development and production.
- [TravisCI](https://travis-ci.org/) is used to trigger tests, builds and deployments through Git.
- [AWS ElasticBeanstalk](https://aws.amazon.com/elasticbeanstalk/) is used to deploy the app in the cloud. 

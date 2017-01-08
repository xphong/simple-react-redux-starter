# React Redux Starter - [Demo](https://xphong.github.io/simple-react-redux-starter/)

* A small React Redux starter that includes an API call to retrieve a list of countries and displays in a table. Includes a navigation bar, and a loading spinner.
* Demo: [https://xphong.github.io/simple-react-redux-starter/](https://xphong.github.io/simple-react-redux-starter/)
* Example project using this starter: [https://github.com/xphong/marvel-app](https://github.com/xphong/marvel-app)
* Guide/Documentation: http://www.phonghuynh.ca/simple-react-redux-starter-guide-documentation/

## Documentation - [Guide](http://www.phonghuynh.ca/simple-react-redux-starter-guide-documentation/)
* ECMAScript 2015 is an ECMAScript standard that was ratified in June 2015. Babel is a compiler that transforms your ES2015 code into JavaScript so that the browser can read it. [http://babeljs.io/](http://babeljs.io/)
* React is a a JavaScript **library** for building user interfaces. [https://facebook.github.io/react/](https://facebook.github.io/react/)
* Redux is a predictable state container for JavaScript apps. [http://redux.js.org/](http://redux.js.org/)
* Webpack is a module bundler which compacts your JavaScript files into separate modules allowing module loading throughout your application. [http://webpack.github.io/docs/what-is-webpack.html](http://webpack.github.io/docs/what-is-webpack.html)
* Yarn is a dependency manager built on top of npm allowing for consistent and reliable versioning using a lockfile. [https://yarnpkg.com/](https://yarnpkg.com/) 

## Quickstart

Clone this repository:
```
git clone https://github.com/xphong/simple-react-redux-starter.git
```

### Dependencies

* Install required dependencies:
```
npm install yarn -g
yarn
```

### Scripts

* Run development server (port 3000): `npm run dev`

* Run production server: `npm run prod`

* Deploy production build: `npm run build`

* Browser: `open http://localhost:3000/`


## Technologies

* [Babel ES2015/ES6](https://github.com/babel/babel)
* [React](https://github.com/facebook/react)
  * [Redux](https://github.com/reactjs/react-redux)
  * [React Router Redux](https://github.com/reactjs/react-router-redux)
  * [Redux Thunk Middleware](https://github.com/gaearon/redux-thunk)
  * [Redux Dev Tools](https://github.com/gaearon/redux-devtools)
  * [Redux Logger](https://github.com/evgenyrodionov/redux-logger)
* [Bootstrap w/ Sass](http://getbootstrap.com/)
* [Yarn](https://yarnpkg.com/)
* [Webpack](https://webpack.github.io/)
* [Axios](https://github.com/mzabriskie/axios)


## File Structure
```
├── README.md
├── index.html
├── package.json
├── server.js
├── webpack.config.dev.js
├── webpack.config.prod.js
├── yarn.lock
├── src/
|   ├── actions
|   |   ├── CountriesActions.js
|   ├── components
|   |   ├── Countries.js
|   |   ├── Country.js
|   |   ├── Navbar.js
|   |   └── Spinner.js
|   ├── constants
|   |   └── ActionTypes.js
|   ├── containers
|   |   ├── About.js
|   |   ├── App.js
|   |   ├── Countries.js
|   |   └── DevTools.js
|   ├── reducers
|   |   ├── countries.js
|   |   └── index.js
|   ├── store
|   |   ├── configureStore.dev.js
|   |   ├── configureStore.prod.js
|   |   └── configureStore.js
|   ├── styles
|   |   └── main.scss
|   ├── index.js
|   ├── routes.js
├── .babelrc
├── .eslintignore
├── .eslintrc
└── .gitignore
```


## FAQ
* Toggle React Dev Tools:
<kbd>CTRL</kbd> + <kbd>H</kbd>

* Based on [Simple Redux Boilerplate](https://github.com/tsaiDavid/simple-redux-boilerplate)

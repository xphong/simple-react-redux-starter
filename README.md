# React Redux Starter - [https://xphong.github.io/simple-react-redux-starter/](https://xphong.github.io/simple-react-redux-starter/)

* A small React Redux starter that includes an API call to retrieve a list of countries and displays in a table
* Demo: [https://xphong.github.io/simple-react-redux-starter/](https://xphong.github.io/simple-react-redux-starter/)
* Example project using this starter: [https://github.com/xphong/marvel-app](https://github.com/xphong/marvel-app)

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
|   |   └── Spinner.js
|   ├── constants
|   |   └── ActionTypes.js
|   ├── containers
|   |   ├── App.js
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
├── .babelrc
├── .eslintignore
├── .eslintrc
└── .gitignore
```

## Technologies

* [Babel ES2015/ES6](https://github.com/babel/babel)
* [React](https://github.com/facebook/react)
  * [Redux](https://github.com/reactjs/react-redux)
  * [Redux Thunk Middleware](https://github.com/gaearon/redux-thunk)
  * [Redux Dev Tools](https://github.com/gaearon/redux-devtools)
  * [Redux Logger](https://github.com/evgenyrodionov/redux-logger)
* [Bootstrap w/ Sass](http://getbootstrap.com/)
* [Yarn](https://yarnpkg.com/)
* [Webpack](https://webpack.github.io/)
* [Axios](https://github.com/mzabriskie/axios)


## FAQ
* Toggle React Dev Tools:
<kbd>CTRL</kbd> + <kbd>H</kbd>

* Based on [Simple Redux Boilerplate](https://github.com/tsaiDavid/simple-redux-boilerplate)

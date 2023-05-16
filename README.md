# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## More Info

Make sure you have all the dependencies in the correct version as listed in package.json file

`npm i --legacy-peer-deps`

or you can install them manually if you wish to update the code by urself:

[Material UI](https://mui.com/material-ui/getting-started/installation/)

Material UI uses [Emotion](https://emotion.sh/docs/introduction) its default styling engine.

Emotion is a library designed for writing css styles with JavaScript.

```js
     npm install @mui/material @emotion/react @emotion/styled @dotenv
```

We also going to use Material UI icons

```js
    npm install @mui/icons-material
```

[React Router Dom](https://www.npmjs.com/package/react-router-dom)

```js
    npm i react-router-dom
```

[React horizontal scrolling menu](https://www.npmjs.com/package/react-horizontal-scrolling-menu)

```js
    npm i react-horizontal-scrolling-menu@2.7.1
```

[React Loader Spinner](https://www.npmjs.com/package/react-loader-spinner)

```js
    npm i react-loader-spinner
```

Make sure in the root directory of your project you rename the .env-example file to .env,
where you securely store your API Key in the format

`REACT_APP_RAPID_API_KEY=your_key`

This project is using data from
[RpidAPI - ExerciseDB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/)
[RpidAPI -Youtube Search and Download](https://rapidapi.com/h0p3rwe/api/youtube-search-and-download)

## Furder development

- Add user login
- Implement list with user favourite exercises

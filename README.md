## Live site: [https://find-exercise.netlify.app/]
## Clone the project

`git clone https://github.com/bpetya44/find-exercises`

`npm i`

`npm run dev`

Run it locally on `localhost:3000`

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

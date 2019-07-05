#Test Cecotec Juan Carlos Del Saz

##Usage

1. Clone or download the source code
2. Go to the folder test-cecotec open a terminal and run the command npm install
3. Run in the terminal npm start for development environment (See the Available scripts section for more information)
4. The user/password for enter in the app is cecotect/1234

##About the App

This application has been developed using React 16.8 and Firebase as a backend.
The structure of the App is the following:

1. Public -> This folder has the public HTML page and the Login in jquery
   1. js -> source code in jquery for managing the login
   2. css -> css for the login using flexbox
   3. login.html -> HTML page for the login in jquery
2. src -> Source code of the app
   1. Components -> Folder contains the components
      1. AddProduct -> The component for adding products
      2. App -> The main page for the App
      3. EditProduct -> The component for managing the edit products
      4. ProductList -> The component for managing the list of products
   2. Firebase.js -> This is the configuration for the firebase DB
   3. Index -> This file is in charge of loading the react part of the app
3. Assets -> This folder is for adding the different assets as images...
4. Package.json -> In this file are the dependencies for the project

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

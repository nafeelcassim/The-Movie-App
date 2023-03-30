# The-Movie-App

An app to view all top rated movies through a movies API.

## Features

- View list of top rated movies
- View details such as title, popularity, release date and overview
- Store the top rated movies locally (can view without network)
- Notify the user if there is no network connectivity

## API Details

- API Documentation - <a href="https://developers.themoviedb.org/3/movies/get-top-rated-movies">The Movie Database API (themoviedb.org) </a>
- Endpoint - https://api.themoviedb.org/3/movie/top_rated

## Compatibility

- Support both Android & IOS (Landscape and Portrait)

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Before running this application, make sure you have the following prerequisites installed on your local machine:

- <a href="https://nodejs.org/en/download">Node.js </a>
- <a href="https://docs.npmjs.com/getting-started">npm</a> or <a href="https://classic.yarnpkg.com/en/docs/install#mac-stable">yarn</a>
- React Native CLI
- Android Studio or Xcode

### Installation

1. Yarn install or npm install
2. If you want to run IOS go to the ios directory and type 'pod install'

### Running the project

1. yarn ios (run the ios project)
2. yarn android (run the android project)
3. yarn test (run unit tests)

## Documentation

This section provides a basic overview of the tools and technologies used

### Major Libarires Used

1. Redux Toolkit
   - Used for global state management which also has the capability to run sideeffects no need to install a redux-thunk seperately
   - Reduces the boiler plate code used in Redux
   - <a href="https://redux-toolkit.js.org/introduction/getting-started">Read More</a>
2. Redux Persist
   - Used to persist the storgae using async storgae
   - <a href="https://www.npmjs.com/package/redux-persist">Read More</a>
3. React Navigation
   - Navigate throught the app (Single page app)
   - <a href="https://reactnavigation.org/">Read More</a>
4. Flash List
   - Used to boost the performace of the Flatlist
   - <a href="https://shopify.github.io/flash-list/">Read More</a>
5. Fast Image (React Native Fast Image)
   - Used to boost the performace of the Image component
   - <a href="https://www.npmjs.com/package/react-native-fast-image">Read More</a>
6. React Native Community NetInfo (@react-native-community/netinfo)
   - Used to detect real time network changes
   - <a href="https://www.npmjs.com/package/@react-native-community/netinfo">Read More</a>

All libaries were used based on the score and advice given by <a href="https://snyk.io/advisor/packages/javascript/popular"><b>Synk Advisor</b></a>

### App Structure

Folder Structure

<ul>
    <li>components</li>
    <li>images (Assets folder was not used since the project only contains a single image)</li>
    <li>navigation</li>
    <li>network</li>
    <li>screen</li>
    <li>store</li>
    <li>types</li>
    <li>util</li>
</ul>

### Code Linting

ES lint

### Commit Messages Structure

<a href="https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13"><b><u>Git Conventional Commit<u></b></a>

### Test

Unit test is written for basic components and functions using <a href="https://jestjs.io/docs/tutorial-react-native">Jest</a>

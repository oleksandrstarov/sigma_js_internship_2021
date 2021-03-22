# Sigma Internship 2021

## Overview

During internship we will learn React library and its features implementing a project that is based on IMDB movies database. The application will allow user searching through the available movies/tv serials, viewing a trip details, storing own favorits/ search history etc.

## Project setup

Before starting working on the project make sure that the following tools are installed:
* Editor or IDE (WebStorm, VS Code etc.)
* Git
* Latest LTS version of NodeJS & NPM
* Google Chrome browser

## API Description
The API documentation is located [here](http://www.omdbapi.com/).

## Minimal Requirements
The application layout must contain:
1. Header
2. Main that depends on the current URL
3. Footer
Application should look fine both on mobile and desktop
There must be unit tests in the application with coverage at least 50%

#### Simple landing page
Some random movie banner from API with some other movies/categories suggestions
Search field with possibility to extend search to provide more parameters (supported by API or even more)

#### Search results page
List of movies returned by search with pagination
The page must support list and grid view (grid must have two types of presentation - small- title and image and big - including rating, small description etc)

#### Movie page
Should provide all information provided by API in nice and readable manner
User should be able to add movie to 'favorites' list and review this list later
User should be able to track 20 latest visited movies

## Constraints
1. No UI libraries allowed (like Bootstrap, Material UI etc.)
2. You can use libraries for HTTP calls, maps, fonts, icons etc.
3. All other libraries must be confirmed with mentors

## Design
There are no requirements for the application design at all. Be creative!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

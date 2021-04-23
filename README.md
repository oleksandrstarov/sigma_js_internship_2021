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
The API documentation is located [here](https://www.themoviedb.org/).

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

The design is located [here](https://www.figma.com/file/GORllsSXkvIKM2FOxBFYAr/Sigma?node-id=20%3A9).

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

## Manual API service

***(retern === ->), All favorite, story and theme every change are save in local Storage***	

**Import:**

  import api from '../service/api';
    
**Theme:**

* api.switchTheme(); 		        If theme was TRUE -> FALSE and in the same way if FALSE -> TRUE 

**API, Search:**

* api.getSearchList(...); 		    -> [{data}, {data}] 	api.getSearchList('godzilla');

* api.getDataById(...) 			    -> {data} 				api.getDataById(id) 	

* api.getPopularQueryList()			-> [{data}, {data}] 	page: **( Optional )** api.getPopularQueryList(page)	

* api.getTopRatedList()				-> [{data}, {data}] 	page: **( Optional )** api.getTopRatedList(page)	

**Favorite:**

* api.setFavoritesId(...); 		    api.setFavoritesId(id);
	
* api.deleteFavoritesId(...); 		api.deleteFavoritesId(id); 
	 
* api.getFavoritesIdList(); 		-> [id, id];
	 
* api.getDataByIds(...); 	        api.getDataByIds( api.getFavoritesIdList() ); -> [{data}, {data}]
	
* api.clearFavoritesIdList(); 		make -> []
	 
**History:**

* api.setHistoryId(...);
	
* api.deleteHistoryId(...);
	 
* api.getHistoryIdList();
	 
* api.getDataByIds(...); 
	
* api.clearHistoryIdList();

**Extra methods:**

  url: /fRGxZuo7jJUWQsVg9PREb98Aclp.jpg, 
  size: w500 **( Optional )**, "poster_sizes": ["w92","w154","w185","w342","w500","w780","original"]

* api.changeImgLinks(url, size)           ->  https://image.tmdb.org/t/p/w500/fRGxZuo7jJUWQsVg9PREb98Aclp.jpg (img-URL )

  array: 20 items
  page: **( Optional )**

* api.changeListByPagination(array, page) -> [{data}, {data}], If arr more than 20 item, then out to use this method with pages
	
**Extra:**


**Filter method:** 

* api.getSearchFileredList(movieFilter).then(console.log)  -> [{},{}]  (movieFilter = {from: 2010,to: 2012,gener:'Comedy',page: 1})

* api.changeImgLindks(arr, idsList) -> [{},{}] conformity of ids in filtered request

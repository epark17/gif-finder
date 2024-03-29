This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## GIF Finder

GIF Finder is a React application that can be used to search any GIFs. Users can also filter the search results: sort from Newest to Oldest, Rated G, Rated PG, and Rated R.

Deployed App to Heroku: https://serene-basin-73337.herokuapp.com/

### Technologies Used:

- Giphy Public API (https://developers.giphy.com/)
- Bootstrap CDN (https://www.bootstrapcdn.com/)
- FontAwesome CDN (https://fontawesome.com/)
- Google Fonts API (https://fonts.google.com/)
- Jest (https://jestjs.io/)
- Enzyme (https://airbnb.io/enzyme/)

### Things I Would Like to Continue Working On or Add to This Project:

- Use React's built-in Context API to manage state rather than have state in App.js (refactor)
- Redesign architecture of app
- Convert all class components to functional components and use Hooks
- Add spinners to each card while GIFs are loading
- Pagination to get more search results
- Show a collection of trending GIFs on landing page
- Add more filters
- Write more tests to learn more about Jest and Enzyme
- Change favicon
- Accessibility
  - research WAI-ARIA, use aria tags
  - HTML/React aria tutorial
  - testing with NVDA screen reader or Chrome extension ChromeVox screen reader
  - https://reactjs.org/docs/accessibility.html
  - https://medium.com/@emilymears/getting-started-with-web-accessibility-in-react-9e591fdb0d52

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

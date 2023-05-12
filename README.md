# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

__In the project, we are going to use ` styled-components ` module, whose installation is incompatible with npm 6+. So, better downgrade to npm 6 or use yarn. [Reference](https://stackoverflow.com/questions/65802896/installing-styled-components-failed-in-react-native)__   
<br />  
   
to use ` yarn ` for the project, update the ' build ' and ' test ' in the scripts.  
<br />  

```
'build': 'babel src -d lib',
'test' : 'jest',
```  
<br />  

## Available Scripts

###  ` yarn start `  
###  ` yarn build `  
###  ` yarn test `  
###  ` yarn eject `    
  
They works same as for ` npm ` described below. [Click](https://github.com/Sciec/disney-plus-clone/edit/main/README.md#npm-start) to quickly go to the section.  
<br />  
> ___Set-up firebase___  

Go to firebase website  -->  Go to Console  -->  Create/ Add a project  -->  Name your project 'disneyplus-clone' -->  setup the region and create.  
  
In the next step, When your project setup is ready  
Continue  -->  Project settings  -->  register and get the keys  --> copy the config object and add it in the firebase.js (in the src folder)  
<br />  
`Go through the commits to check the way to setup the auth for the project. (Google Popup) `   
<br />
`signInWithPopup` is a function provided by the Firebase Authentication API, but it seems to be undefined or not imported correctly in the code. Here is an example of how you can import it correctly:  [(Reference)](https://you.com/search?q=typeerror%3A+%280%2C+_auth.signinwithpopup%29+is+not+a+function.+%28in+%27%280%2C+_auth.signinwithpopup%29%28auth%2C+provider%29%27%2C+%27%280%2C+_auth.signinwithpopup%29%27+is+undefined%29&tbm=youchat&cfr=chatb&cid=c2_49e5ce0f-9089-457d-9be1-f421770caa11)
  
```
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    // Handle sign-in successful case here
  })
  .catch((error) => {
    // Handle sign-in error case here
  });
```  
  
  





<br />  

***
If we weren't using yarn, we could go with the following (default)

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

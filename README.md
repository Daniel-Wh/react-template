# Getting Started with this template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the typescript template.

## Necessary changes

The github workflow requires two changes. 
In the main package.json file, you will need to update the homepage value to the correct link. You can see the current link and how it's referenced on this repo's site. 
Second you will need to enable github pages to release off of the github pages branch that is created during the deploy stage of the workflow.

## Branch Protections

I created a branch protection rule that applied to administrators as well that requires that all four steps (Lint, Build, Deploy, Test) are successfully completed prior to allowing a merge to main. This is a personal preference but is available to you if you desire to enforce consistent behavior. 

## Browswer Automation

I use playwright for simple ui checks and behavior testing. You will need to update the link to point to your repo's page in order to test against your current deploy.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
You should make sure your browser has the React developer tools

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

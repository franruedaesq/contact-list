# contact-list

The [Contact List](https://contact-list-seven.vercel.app/) App was built using React.<br>
Redux Toolkit is used for the application state management<br>
The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Live version 

You can access to a Live version of the app by clicking in the next link.
[https://contact-list-seven.vercel.app/](https://contact-list-seven.vercel.app/)<br>
The app is being deploy using [Vercel for GitHub](https://vercel.com/docs/git/vercel-for-github) which automatically deploys a GitHub projects on every branch push with Vercel, providing Preview Deployment URLs, and automatic Custom Domain updates.

## Installation

Using npm:
### `npm install`
Install all necessary dependencies.

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

## Functionality 
 * The application consists on a list of contacts.
 * The contacts of the application are retrieved from [Random User Generator](http://randomuser.me) API.
 * The contacts are grouped in tabs
 * When clicking on a contact, a card is displayed. 
 * When clicking on the close button of a card, it disappear. 
 * While a contact card is being displayed, if another contact is clicked, the first clicked contact card disappear. 

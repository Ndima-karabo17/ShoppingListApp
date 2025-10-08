Grocery List App
-

A full-featured React-based web application to help users manage grocery items efficiently. 
This project allows users to register, log in, and manage their shopping catalog through 
a responsive and intuitive UI.

Features & Functionality
 Authentication
 -

1.Register a new account with name, email, phone number, and password.

2.Log in with your registered email and password.

3.After logging in, users are automatically redirected to the Catelog page.

4.Basic error handling (e.g. invalid credentials

Grocery catelog
-

View a list of all grocery items added.
-

Add new items with:
-Name
-Quantity
-Optional notes
-Category
-Optional image (Base64 encoded preview).
-View uploaded item images directly within the catalog.

Edit & Delete Items 
-
*Each item will have Edit and Delete buttons (coming soon if not yet implemented).

*Future functionality includes:
-Editing any part of an existing item.
-Removing items from the catalog.

Search (Basic Input Present)
-Search bar is styled and present.
-Full search filtering functionality can be implemented with simple state filtering.

Routing
React Router handles client-side navigation:
-

/ — Home page with introduction and calls to action.

/register — Register new user.

/login — Login to an existing account.

/catelog — Main grocery catalog (protected view after login).

WHAT IS NEEDED?
-
-Make sure you installed Node.js

-npm install

-npm install react-icons

-npm install -g json-server

-json-server db.json --port 5000

-npm install react-router-dom

-npm install tailwindcss @tailwindcss/vite

-npm install @reduxjs/toolkit

-npm install react-redux

-npm run dev

How it looks like...

Landing page
<img width="1900" height="900" alt="Screenshot 2025-10-08 152109" src="https://github.com/user-attachments/assets/6b1113b4-2ce6-4b61-8486-df51abf9ccc8" />
<img width="1900" height="900" alt="Screenshot 2025-10-08 152323" src="https://github.com/user-attachments/assets/a75d3903-63b1-4d51-9cf3-ba8d04d30801" />
<img width="1900" height="900" alt="Screenshot 2025-10-08 152522" src="https://github.com/user-attachments/assets/021422fa-ccb7-471e-bf67-4ead592a0b14" />

#  Grocery List App

A full-featured React-based web application to help users manage grocery items efficiently. This project allows users to register, log in, and manage their shopping catalog through a responsive and intuitive UI.

---

##  Table of Contents

- [Description](#description)
- [Features](#features)
- [Visuals](#visuals)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Routing](#routing)
- [Roadmap](#roadmap)
- [Project Status](#project-status)

---

##  Description

The Grocery List App is a client-side React application powered by Redux for state management and `json-server` as a mock REST API backend. Users can create accounts, log in, and manage a personal grocery catalog — adding items with names, quantities, categories, notes, and images.

---

##  Features

###  Authentication
- Register a new account with name, email, phone number, and password
- Log in with your registered email and password
- Automatic redirect to the Catalog page after login
- Basic error handling (e.g. invalid credentials)

###  Grocery Catalog
- View a list of all grocery items added
- Add new items with:
  - Name
  - Quantity
  - Category
  - Optional notes
  - Optional image (Base64 encoded preview)
- View uploaded item images directly within the catalog

###  Edit & Delete Items
- Each item has Edit and Delete buttons
- Future functionality includes:
  - Editing any part of an existing item
  - Removing items from the catalog

###  Search
- Search bar is styled and present
- Full search filtering can be implemented with simple state filtering

---

##  Visuals

### Landing Page
<img width="1900" height="900" alt="home overview" src="https://github.com/user-attachments/assets/6b1113b4-2ce6-4b61-8486-df51abf9ccc8" />
<img width="1900" height="900" alt="Header overview" src="https://github.com/user-attachments/assets/61a9958e-ec98-4934-8f1d-67beb51b0940" />
<img width="1900" height="900" alt="Home footer" src="https://github.com/user-attachments/assets/021422fa-ccb7-471e-bf67-4ead592a0b14" />

### Register Page
<img width="1900" height="900" alt="Register overview" src="https://github.com/user-attachments/assets/33ac465a-98f4-48e8-967f-7090a767aa87" />

### Login Page
<img width="1900" height="900" alt="Login overview" src="https://github.com/user-attachments/assets/6bfc3443-bb0c-4557-8110-c00f26ac4952" />

### Catalog Page
<img width="1900" height="900" alt="Catelog overview" src="https://github.com/user-attachments/assets/6ce24aa6-e5f1-4ec7-acc3-3124fc43bc30" />
<img width="1900" height="900" alt="Updated catelog with sorting" src="https://github.com/user-attachments/assets/9fd6d67c-4efd-443f-9063-3affa818e0c4" />
<img width="1900" height="900" alt="Catelog when clicked Add icon" src="https://github.com/user-attachments/assets/6c2ec88b-364d-41aa-a852-d1a30c6d689f" />

### Privacy Page
<img width="1900" height="900" alt="Privacy overview" src="https://github.com/user-attachments/assets/a9788eaa-bc3a-44bb-920d-cd9287c392fd" />

---

##  Requirements

Before installing, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

---

##  Tech Stack

| Technology | Purpose |
|------------|---------|
| [React](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Node.js](https://nodejs.org/) | Runtime environment |
| [Redux Toolkit](https://redux-toolkit.js.org/) | State management |
| [React Router DOM](https://reactrouter.com/) | Client-side routing |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [json-server](https://github.com/typicode/json-server) | Mock REST API backend |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |
| [UUID](https://github.com/uuidjs/uuid) | Unique ID generation |

---

##  Installation

Follow these steps to get the project running locally:

```bash
# 1. Clone the repository
git clone my project repo
cd to my project repo

# 2. Install project dependencies
npm install

# 3. Install React Router
npm install react-router-dom
npm install --save-dev @types/react-router-dom

# 4. Install Tailwind CSS
npm install tailwindcss @tailwindcss/vite

# 5. Install Redux Toolkit and React Redux for state management
npm install @reduxjs/toolkit react-redux

# 6. Install React Icons
npm install react-icons

# 7. Install UUID for generating unique IDs
npm install --save-dev @types/uuid

# 8. Install Node.js type definitions
npm install --save-dev @types/node

# 9. Install icons
npm install react-icons

# 11. In a separate terminal, start the development server
npm run dev
```

---

##  Usage

Once both servers are running:

1. Open your browser and navigate to `http://localhost:5173` (or whichever port Vite assigns)
2. Register a new account on the `/register` page
3. Log in on the `/login` page — you'll be redirected to the catalog
4. Add, view, and manage your grocery items from the `/catelog` page

---

##  Routing

Client-side routing is handled by React Router:

| Path | Description |
|------|-------------|
| `/` | Home page with introduction and calls to action |
| `/register` | Register a new user account |
| `/login` | Log in to an existing account |
| `/catelog` | Main grocery catalog (protected view after login) |

---

##  Roadmap

- [ ] Full edit functionality for existing items
- [ ] Delete confirmation modal
- [ ] Live search filtering by name or category
- [ ] Protected routes (redirect to login if not authenticated)
- [ ] Persistent login with localStorage or token-based auth
- [ ] Improved image upload (file input instead of Base64)

---

##  Project Status

This project is actively in development. Core features such as authentication and catalog management are functional. Edit/Delete and search filtering are partially implemented and planned for upcoming updates.

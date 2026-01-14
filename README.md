# CryptoDucks 🦆

**Sprint 14: Front-End Authentication with React**

CryptoDucks is a React application built with **Vite**, used in the **TripleTen Software Engineering Bootcamp** to demonstrate **front-end authentication and authorization** using React Router.

The project focuses on protecting routes, managing authentication state, redirecting users appropriately, and displaying user-specific data — all patterns commonly found in production React applications.

---

## 📌 Project Overview

This repository provides a prepared UI and component structure so the primary focus can remain on:

- Authentication and authorization logic
- Public vs private routing
- Redirect behavior
- Secure access to user-specific views

The app contains **highly sensitive information**, and users must sign in or register before accessing protected content.

---

## 🚀 Features

- **User Authentication**

  - Login and registration flows
  - Redirects after login and logout

- **Protected Routes**

  - Public: `/login`, `/register`
  - Private: `/ducks`, `/my-profile`

- **Authorization Logic**

  - Prevents unauthenticated access to private views
  - Redirects users based on auth state

- **User-Specific Profile**

  - “My Profile” view displays data unique to the logged-in user

- **Authenticated Navigation**
  - Navigation bar visible only when logged in
  - Includes Ducks, My Profile, and Sign Out links

---

## 🧭 Application Routes

| Route         | Access Type | Description              |
| ------------- | ----------- | ------------------------ |
| `/login`      | Public      | User login page          |
| `/register`   | Public      | User registration page   |
| `/ducks`      | Private     | CryptoDucks feed         |
| `/my-profile` | Private     | User profile information |

---

## 🧪 Demo Credentials

Use the following credentials to explore the app:

Username: Looney
Password: Quack45

yaml
Copy code

After logging in, users are automatically redirected to the **Ducks** view.

---

## 🛠 Tech Stack

- **React**
- **Vite**
- **React Router**
- **JavaScript (ES6+)**
- **HTML & CSS**

---

## 📂 Project Structure

The application consists of four main view components:

- **Login** — Authenticates users
- **Register** — Registers new users
- **Ducks** — Private feed of CryptoDucks
- **MyProfile** — Displays user-specific information

Routing is handled with **React Router**, with all routes defined in `App.jsx` and wrapped in `BrowserRouter` inside `main.jsx`.

---

## 🔐 Authentication & Routing Logic

At the start of the project:

- The root route (`/`) had no corresponding component
- All routes were publicly accessible
- Users could manually access protected views without authentication

Over the course of Sprint 14, authentication logic is implemented to:

- Protect private routes
- Redirect unauthenticated users to `/login`
- Redirect authenticated users away from `/login` and `/register`
- Ensure profile data belongs only to the logged-in user

---

## ▶️ Usage

Clone the repository, install dependencies, and start the development server:

```bash
npm install
npm run dev
The app will run locally (typically at http://localhost:3000).
The starting code is located in the main branch, while lesson solution code lives in separate branches for each chapter.

🧠 What This Project Demonstrates
Front-end authentication patterns

Route protection with React Router

Conditional rendering based on auth state

Real-world redirect flows

Clean separation of public and private views

📎 Notes
This project is part of TripleTen — Sprint 14: Front-End Authentication, Chapter 2 of 7.
It serves as a guided implementation of authentication concepts commonly used in modern React applications.

✅ Status
Completed — Authentication flow and protected routing implemented.
```

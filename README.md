# CryptoDucks 🦆

**Sprint 14: Front-End Authentication with React**

CryptoDucks is a React application built with **Vite** as part of the **TripleTen Software Engineering Bootcamp**. The project demonstrates real-world **frontend authentication and authorization** patterns using React Router, including protected routes, redirect logic, and user-specific views.

---

## Project Objective

The objective of **CryptoDucks** is to implement and showcase common frontend authentication patterns used in production React applications. The project focuses on securing routes, managing authentication state, enforcing authorization rules, and ensuring users only access content appropriate to their authentication status.

Key goals include:

- Implementing protected and public routes
- Managing authentication-aware navigation
- Handling redirects for login, logout, and restricted access
- Displaying user-specific data securely

---

## Features

- **User Authentication**

  - Login and registration flows
  - Redirects after login and logout

- **Protected Routes**

  - Public routes: `/login`, `/register`
  - Private routes: `/ducks`, `/my-profile`

- **Authorization Logic**

  - Prevents unauthenticated access to private views
  - Redirects users based on authentication state

- **User-Specific Profile**

  - "My Profile" view displays data unique to the logged-in user

- **Authenticated Navigation**

  - Navigation bar visible only when logged in
  - Includes Ducks, My Profile, and Sign Out links

---

## 📸 Project Screenshots

A visual walkthrough of the application highlighting the authentication flow, protected content, and user-specific views.

### 🔐 Login & Authentication

![CryptoDucks Login](src/assets/images/cryptoDucks-login.png)

### 🦆 Protected Ducks Feed

![CryptoDucks Feed](src/assets/images/cryptoDucks.png)

### 👤 User Profile

![My Profile](src/assets/images/my-profile.png)

---

## Application Routes

| Route         | Access Type | Description              |
| ------------- | ----------- | ------------------------ |
| `/login`      | Public      | User login page          |
| `/register`   | Public      | User registration page   |
| `/ducks`      | Private     | CryptoDucks feed         |
| `/my-profile` | Private     | User profile information |

---

## Demo Credentials

Use the following credentials to explore the application:

- **Username:** Looney
- **Password:** Quack45

After logging in, users are automatically redirected to the **Ducks** view.

---

## Architecture Overview

The application is built using React functional components and **React Router** for navigation. Authentication state is managed at the application level and passed to routes and navigation components to control access, visibility, and redirect behavior. This structure mirrors common patterns used in production frontend authentication flows.

---

## Installation & Usage

Clone the repository, install dependencies, and start the development server:

```bash
npm install
npm run dev
```

The application runs locally (typically at `http://localhost:3000`).

The starting code is located in the `main` branch, while solution implementations for each lesson are stored in separate branches.

---

## What This Project Demonstrates

- Frontend authentication and authorization patterns
- Route protection with React Router
- Conditional rendering based on authentication state
- Real-world redirect flows
- Clean separation of public and private views

---

## Browser & Performance Notes

The application loads quickly and functions correctly across modern browsers. It is designed to behave consistently during authentication transitions and route changes.

---

## Conclusion

**CryptoDucks** successfully demonstrates secure frontend authentication and routing patterns in a React application. The project reflects production-style handling of protected routes, user-specific data, and authentication-aware navigation, making it a strong foundation for future full-stack authentication workflows.

---

## Future Improvements & Business Impact

- Integrate a real backend authentication system using JWTs
- Persist user sessions across page reloads
- Add role-based access control
- Improve form validation and error handling
- Introduce analytics to track authentication funnel performance

From a business perspective, these improvements would increase security, reduce user friction during onboarding, and provide insights into user behavior across protected areas of the application.

---

## Tech Stack

- React
- Vite
- React Router
- JavaScript (ES6+)
- HTML & CSS

---

## Status

Completed — frontend authentication flow and protected routing implemented.

---

## Notes

This project is part of **TripleTen — Sprint 14: Front-End Authentication**, Chapter 2 of 7. It serves as a guided implementation of authentication concepts commonly used in modern React applications.

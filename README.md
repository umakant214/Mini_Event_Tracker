# Mini Event Tracker

A simple **Event Management Web Application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.
This application enables users to **create, view, update, and delete events** with secure authentication.

---

# Features

* User registration and login with **JWT Authentication**
* Create new events
* View all events
* Update existing events
* Delete events
* **Protected routes** using authentication middleware
* Form validation using **Yup**
* User-friendly alert notifications using **SweetAlert2**

---

# Tech Stack

## Frontend

* React.js
* React Hook Form
* Yup Validation
* Axios
* Bootstrap
* SweetAlert2

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Bcrypt password hashing

---

# Installation

### 1. Clone the Repository

```
git clone https://github.com/umakant214/Mini_Event_Tracker.git
```

### 2. Install Backend Dependencies

```
cd backend
npm install
```

### 3. Install Frontend Dependencies

```
cd frontend
npm install
```

---

# Running the Project

To run the project, start the **backend and frontend servers separately in different terminals**.

### 1. Start the Backend Server

```
cd backend
npm run dev
```

The backend server will start successfully.

---

### 2. Start the Frontend Application

```
cd frontend
npm run dev
```

The React application will start in the browser.

---

# Default URLs

Frontend Application

```
http://localhost:5173
```

Backend API

```
http://localhost:3000
```

---

# API Endpoints

| Method | Endpoint              | Description              |
| ------ | --------------------- | ------------------------ |
| POST   | /api/register         | Register a new user      |
| POST   | /api/login            | Login user               |
| POST   | /api/create           | Create a new event       |
| GET    | /api/get-event        | Retrieve all events      |
| PUT    | /api/update-event/:id | Update an existing event |
| DELETE | /api/delete-event/:id | Delete an event          |

---

# Event Fields

```
Title
DateTime
Location
OptionDes
```

---

# Authentication

All event-related APIs are protected using **JWT Authentication Middleware**.

Example Header:

```
Authorization: Bearer TOKEN
```

---

# Author

**Umakant Yadav**

MERN Stack Developer
Diploma in Computer Science

# Mini Event Tracker

A simple **Event Management Web Application** built using the **MERN Stack**.
This application allows users to **create, view, update, and delete events** with secure authentication.

---

# Features

- User Registration & Login (JWT Authentication)
- Create Event
- View Events
- Update Event
- Delete Event
- Protected Routes using Auth Middleware
- Form Validation using Yup
- SweetAlert UI notifications

---

# Tech Stack

### Frontend

- React.js
- React Hook Form
- Yup Validation
- Axios
- Bootstrap
- SweetAlert2

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt Password Hashing

---

# Installation

### 1️⃣ Clone the repository

```
git clone https://github.com/umakant214/Mini_Event_Tracker.git
```

### 2️⃣ Install Backend Dependencies

```
cd backend
npm install
```

### 3️⃣ Install Frontend Dependencies

```
cd frontend
npm install
```

---

# Run Project

Project run karne ke liye **backend aur frontend ko alag-alag terminals me start karna hoga**.

### 1️⃣ Backend Run

Backend folder me jaake command run karein:

```
cd backend
npm run dev
```

Backend server start ho jayega.

---

### 2️⃣ Frontend Run

Ab frontend folder me jaake React application start karein:

```
cd frontend
npm run dev
```

Frontend application browser me run ho jayega.

---

# Default URLs

Frontend:

```
http://localhost:5173
```

Backend API:

```
http://localhost:3000
```

---

# API Endpoints

| Method | API                   | Description    |
| ------ | --------------------- | -------------- |
| POST   | /api/register         | Register User  |
| POST   | /api/login            | Login User     |
| POST   | /api/create           | Create Event   |
| GET    | /api/get-event        | Get All Events |
| PUT    | /api/update-event/:id | Update Event   |
| DELETE | /api/delete-event/:id | Delete Event   |

---

# 🖥 Event Fields

```
Title
dateTime
Location
OptionDes
```

---

# Authentication

All event APIs are protected using **JWT Authentication Middleware**.

Header example:

```
Authorization: Bearer TOKEN
```

---

# Author

**Umakant Yadav**

- MERN Stack Developer
- Diploma in Computer Science Student

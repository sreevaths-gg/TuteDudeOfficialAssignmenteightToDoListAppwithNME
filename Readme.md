# To-Do List Application with Node.js, Express.js, MongoDB, React & Axios

## Project Overview

This project is a full-stack To-Do List Application developed using:

- Node.js
- Express.js
- MongoDB
- Mongoose
- React.js
- Axios

The application allows users to:

- Create tasks
- View all tasks
- View a single task
- Search tasks
- Update task details
- Update task status
- Delete tasks

The backend follows a layered architecture using:

- Routes
- Controllers
- Services
- Models
- Middleware

The frontend communicates with the backend using Axios.

---

# Features

## Backend Features

- Create Task
- Get All Tasks
- Get Single Task
- Search Task
- Update Task
- Update Task Status
- Delete Task
- Error Handling
- Request Validation
- MongoDB Integration

## Frontend Features

- Display Tasks
- Add New Task
- Search Tasks
- Update Status
- Delete Tasks
- Axios Integration
- Dynamic Rendering

---

# Tech Stack

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Dotenv
- CORS

## Frontend

- React.js
- Axios
- Vite

---

# Project Structure

## Backend

```text
To-Do-List-App-with-NME
│
├── server.js
├── package.json
├── .env
│
└── src
    │
    ├── app.js
    │
    ├── config
    │   └── db.js
    │
    ├── controllers
    │   └── todoController.js
    │
    ├── services
    │   └── todoService.js
    │
    ├── routes
    │   └── todoRoutes.js
    │
    ├── models
    │   └── todoModel.js
    │
    └── middleware
        └── errorHandler.js
```

## Frontend

```text
frontend
│
├── package.json
│
└── src
    │
    ├── App.jsx
    ├── App.css
    │
    ├── services
    │   └── todoService.jsx
    │
    └── components
        ├── TodoForm.jsx
        ├── TodoList.jsx
        └── SearchBar.jsx
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

# Backend Setup

## Navigate To Backend

```bash
cd To-Do-List-App-with-NME
```

## Install Dependencies

```bash
npm install
```

## Create .env File

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/toDoListApp
```

## Start Backend

```bash
npm run dev
```

Expected:

```text
MongoDB Connected Successfully
Server running on port 5000
```

---

# Frontend Setup

## Navigate To Frontend

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

Install Axios

```bash
npm install axios
```

## Start Frontend

```bash
npm run dev
```

Expected:

```text
http://localhost:5173
```

---

# API Endpoints

## Get All Tasks

```http
GET /api/toDoListApi
```

Response

```json
[
  {
    "_id": "123",
    "title": "Learn Node",
    "description": "Learn Express",
    "status": "pending"
  }
]
```

---

## Get Single Task

```http
GET /api/toDoListApi/:id
```

Example

```http
GET /api/toDoListApi/123
```

---

## Search Tasks

```http
GET /api/toDoListApi?search=node
```

Example

```http
GET /api/toDoListApi?search=mongo
```

---

## Create Task

```http
POST /api/toDoListApi
```

Request Body

```json
{
  "title": "Learn React",
  "description": "Hooks"
}
```

---

## Update Task

```http
PUT /api/toDoListApi/:id
```

Request Body

```json
{
  "title": "Updated Task",
  "description": "Updated Description"
}
```

---

## Update Status

```http
PATCH /api/toDoListApi/:id/status
```

Request Body

```json
{
  "status": "completed"
}
```

Possible Values

```text
pending
completed
```

---

## Delete Task

```http
DELETE /api/toDoListApi/:id
```

---

# Database

## Database Name

```text
toDoListApp
```

## Collection Name

```text
toDoListApi
```

---

# Validation Rules

## Title

- Required

Example:

```json
{
  "message": "Title is required"
}
```

## Status

Allowed values:

```text
pending
completed
```

Invalid status returns:

```json
{
  "message": "Invalid Status"
}
```

---

# Error Handling

Application handles:

- Invalid IDs
- Missing Fields
- Database Errors
- Invalid Status Values
- Route Errors

---

# Axios Integration

Axios is used in the frontend for API communication.

Examples:

### Get Tasks

```javascript
axios.get(
  "http://localhost:5000/api/toDoListApi"
);
```

### Create Task

```javascript
axios.post(
  "http://localhost:5000/api/toDoListApi",
  {
    title: "Learn React",
    description: "Hooks"
  }
);
```

### Delete Task

```javascript
axios.delete(
  `http://localhost:5000/api/toDoListApi/${id}`
);
```

---

# Testing

The APIs were tested using:

- Postman
- Browser
- React Frontend

All CRUD operations were successfully verified.

---

# Future Improvements

- User Authentication
- JWT Security
- Pagination
- Category Management
- Due Dates
- Drag and Drop Tasks
- Dark Mode

---

# Author

Name: [Your Name]

Assignment:
To-Do List Application using Node.js, Express.js, MongoDB, React, and Axios
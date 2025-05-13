# 🛠️ Task Management API - Backend

This is the backend REST API for the Task Management application. Built with **Node.js**, **Express**, and **MongoDB**, it handles user authentication and task CRUD operations.

## Tech Stack

- **Backend Framework**: Express.js  
- **Database**: MongoDB with Mongoose  
- **Authentication**: JWT-based auth  
- **Environment Variables**: Managed via `.env`

## Features

- User Registration & Login  
- JWT Authentication  
- Task CRUD (Create, Read, Update, Delete)  
- User-specific task access  

## Project Structure

```
/src
  /controllers – Handle HTTP requests and responses. Extract input, call services, return results or errors.
  /services – Contain application/business logic. Process data, orchestrate workflows, and call repository methods.
  /repository – Abstract database access. Perform direct interactions with Mongoose models (find, save, update, etc.).
  /models – Define Mongoose schemas and models.
  /routes – Define Express routes and map them to controller functions.
  /middleware – Express middleware (e.g. auth, logging, error handlers).
  /utils – Reusable utility functions
.env - Environment variables
server.js - entry point
```

## API Endpoints

### Auth

- `POST /api/auth/register` → Register a new user  
- `POST /api/auth/login` → Login and get token  
- `POST /api/auth/logout` → Logout and clear token
- `GET /api/auth/me` → Fetch current user data 

### Tasks (Protected)

- `GET /api/tasks/users/:id` → Get all tasks for the logged-in user  
- `POST /api/tasks` → Create a new task  
- `PATCH /api/tasks/:id` → Update a task  
- `DELETE /api/tasks/:id` → Delete a task  

More details here:
https://documenter.getpostman.com/view/28202989/2sB2jAc8HN

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Row2xWalker/task_manager_backend.git
cd task_manager_backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root:

```env
PORT=3001
MONGO_URI=your_mongo_db_uri/task_management_db
JWT_SECRET=your_jwt_secret_key
JWT_COOKIE_EXPIRES_IN=86400
```

### 4. Run the server

```bash
npm run dev
```

The API will be available at: http://localhost:3001

## Scripts

- `dev` – Run with node server.js  

## Security & Best Practices

- Use environment variables for sensitive data  
- Password hashing with bcrypt  
- Protect routes with auth middleware  
- Input validation and standardized error handling  

## 📄 License

MIT

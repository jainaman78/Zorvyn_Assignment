## Finance Dashboard Backend
## Overview
This project is a backend system for a finance dashboard that manages financial records and controls access based on user roles. It provides APIs for authentication, record management, and summary analytics.

## Features
User authentication using JWT
Role-based access control (Admin, Analyst, Viewer)
Financial records management (CRUD operations)
Dashboard analytics (summary, category-wise, monthly trends, recent activity)
Filtering and pagination support
Input validation and error handling

## Tech Stack
Node.js
Express.js
MongoDB (Mongoose)

## User Rolee

## Admin
Full access (create, update, delete records and users)

## Analyst
Can view records and dashboard analytics

## Viewer
Limited read-only access

## API Endpoints
## Auth
POST /api/auth/register -> Register user
POST /api/auth/login -> Login user
GET /api/auth/me -> Get current user
## Users (Admin only)
GET /api/users -> Get all users
PUT /api/users/:id → Update role or status
## Records
GET /api/records → Get records (with filtering & pagination)
POST /api/records → Create record (Admin)
PUT /api/records/:id → Update record (Admin)
DELETE /api/records/:id → Delete record (Admin)

## Dashboard
GET /api/dashboard/summary → Income, expense, balance
GET /api/dashboard/category → Category-wise totals
GET /api/dashboard/monthly → Monthly trends
GET /api/dashboard/recent → Recent transactions
Query Parameters (Records)
type → income / expense
category → filter by category
page → page number
limit → number of records per page

## Example:

/api/records?type=income&page=1&limit=5
Setup Instructions
Clone the repository

git clone <repo-link>
cd finance-backend
Install dependencies

npm install
Create .env file

MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
Run the server

npm run dev
Server runs on:

http://localhost:5000
Assumptions
Roles are predefined (admin, analyst, viewer)
Only admin can modify records and users
JWT is used for authentication
All financial data is stored in a single database

## Testing
APIs were tested using Postman with different roles to verify access control and edge cases such as:
Invalid token
Missing fields
Inactive users

## Project Structure
config/
controllers/
middleware/
models/
routes/
server.js
Notes
This project focuses on backend design, clean structure, and proper handling of business logic rather than production-level deployment.
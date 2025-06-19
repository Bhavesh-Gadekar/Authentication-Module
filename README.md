A full-stack authentication system built with the MERN stack (MongoDB, Express.js, React, Node.js). This app provides secure login, signup, password reset via email, protected routes using JWT, and frontend integration with Axios.

📦 Folder Structure
mern-auth-app/
│
├── backend/
│   ├── config/
│   │   └── db.js                  # MongoDB connection setup
│   ├── controllers/
│   │   └── authController.js      # All auth logic (signup, login, reset, etc.)
│   ├── middleware/
│   │   └── verifyUser.js          # JWT verification middleware
│   ├── routes/
│   │   └── authRoutes.js          # API endpoints
│   ├── .env                       # Environment variables
│   ├── server.js                  # Express entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Signup.js
│   │   │   ├── ForgotPassword.js
│   │   │   ├── ResetPassword.js
│   │   │   └── Home.js            # Protected route component
│   │   ├── services/
│   │   │   └── api.js             # Axios setup and API functions
│   │   ├── App.js
│   │   ├── index.js
│   │   └── routes.js              # React Router setup
│   ├── .env
│   └── package.json
🧩 Tech Stack
MongoDB – NoSQL Database

Express.js – Backend REST API

React.js – Frontend UI

Node.js – Server runtime

Axios – HTTP client on frontend

JWT – For secure token-based auth

bcryptjs – Password hashing

Nodemailer – Sending password reset emails

✨ Features
User Signup & Login

Password encryption with bcrypt

Token-based authentication with JWT

Email-based password reset system

Protected routes with middleware

Frontend form validation

Axios-based API communication

🔐 Backend Routes
Method	Route	Description
POST	/api/signup	Register new user
POST	/api/login	Login user and return JWT
POST	/api/logout	Clear token cookie
POST	/api/forgetpassword	Send password reset email
POST	/api/resetpassword/:id/:token	Reset password via email link
GET	/api/getuser/:id	Get user data by ID
GET	/home	Protected route (requires token)

⚙️ How to Run the Project
🛠 Backend Setup
Navigate to backend folder:
cd backend
Install dependencies:
npm install
Create .env file:
env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
FRONTEND_URL=http://localhost:3000
Start backend:
npm start
💻 Frontend Setup
Navigate to frontend folder:
cd frontend
Install dependencies:
npm install
Create .env file:
env
REACT_APP_API_URL=http://localhost:5000/api
Axios setup (frontend/src/services/api.js):
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

export default API;
Start frontend:
npm start
🔄 Password Reset Flow
User requests password reset via email (/api/forgetpassword)

Email contains link: http://localhost:3000/reset-password/:id/:token

User enters new password, which is validated and saved

🔐 Security Practices
Passwords hashed with bcrypt

JWT securely stored in HTTP-only cookies

Token verification before protected actions

Tokens expire for reset links

📄 License
This project is licensed under the MIT License.


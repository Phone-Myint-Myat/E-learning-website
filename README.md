# E-Learning Website

A modern E-learning platform built with React.js, Java Spring Boot, and Firebase.

## Project Structure
```
E-learning-website/
├── frontend/           # React.js frontend application
├── backend/           # Java Spring Boot backend application
└── README.md         # Project documentation
```

## Features
- User authentication and authorization
- Course browsing and enrollment
- Video lectures and course materials
- Progress tracking
- Interactive quizzes and assignments
- Discussion forums
- User profiles and dashboard

## Tech Stack
- Frontend: React.js, Material-UI, Redux
- Backend: Java Spring Boot
- Database: Firebase
- Authentication: Firebase Auth
- Storage: Firebase Storage

## Prerequisites
- Node.js (v14 or higher)
- Java JDK 11 or higher
- Maven
- Firebase account

## Setup Instructions

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Build the project:
   ```bash
   mvn clean install
   ```
3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

## Environment Variables
Create a `.env` file in the frontend directory with the following variables:
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
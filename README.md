# Chat App

A modern real-time chat application built with cutting-edge web technologies.

## Features

- 💬 Real-time messaging with Socket.io
- 🔐 Secure authentication using JWT
- 🎨 Modern UI with TailwindCSS
- 🌙 Dark mode support
- 📸 Profile image upload via Cloudinary
- ⚡ High performance with React and Vite

## Tech Stack

### Frontend

- React 19
- Vite
- TailwindCSS & DaisyUI
- Socket.io Client
- Zustand (State Management)
- React Router

### Backend

- Node.js
- Express
- Socket.io
- MongoDB & Mongoose
- JWT Authentication
- Cloudinary
- Bcrypt

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB
- Cloudinary account (for image uploads)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/chat-app.git
cd chat-app
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the `backend` directory:

```env
PORT=1502
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. Run the application:

For development:

```bash
# Backend
cd backend
npm run dev

# Frontend (in another terminal)
cd frontend
npm run dev
```

For production:

```bash
npm run build
npm start
```

## Project Structure

```
chat-app/
├── backend/          # Node.js server
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── lib/
│   └── server.js
├── frontend/         # React application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   └── lib/
│   └── package.json
└── package.json
```

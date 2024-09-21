# Chatting App

This is a real-time chatting application built using the MERN (MongoDB, Express, React, Node.js) stack with Socket.io for real-time communication. The app includes user authentication, media (image and video) sharing via Cloudinary, and a responsive design styled with Tailwind CSS.

## Features

- **User Authentication:** Sign up and login functionality with JWT (JSON Web Token) for secure authentication.
- **Real-time Chatting:** Powered by Socket.io for real-time communication between users.
- **Media Sharing:** Users can send images and videos, stored securely using Cloudinary.
- **Responsive Design:** Built using Tailwind CSS to provide a sleek and responsive user interface.
- **MongoDB Database:** MongoDB is used to store user information, chat history, and media references.
- **React Frontend:** Frontend built with React for dynamic and interactive user experience.
- **Node.js and Express Backend:** Backend server using Node.js and Express for API endpoints and WebSocket integration.

## Tech Stack

- **Frontend:** React, Tailwind CSS, Socket.io-client
- **Backend:** Node.js, Express, Socket.io
- **Database:** MongoDB
- **Cloud Storage:** Cloudinary (for images and videos)
- **Authentication:** JWT (JSON Web Tokens)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sanchiitvijay/chatting-app.git
   cd chatting-app
   ```

2. Install the server dependencies:
   ```bash
   cd server
   npm install
   ```

3. Install the client dependencies:
   ```bash
   cd ../client
   npm install
   ```

4. Start the backend server:
   ```bash
   cd server
   node index.js
   ```

5. Start the frontend:
   ```bash
   cd ../client
   npm start
   ```

## Usage

1. Sign up or log in to access the chat interface.
2. Select a user to start a conversation with.
3. Send text, images, or videos in real-time.
4. Enjoy seamless chat interactions with responsive design and media sharing.

## License

This project is licensed under the MIT License.

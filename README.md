🚀 Features

✅ Upload files up to 50MB.

✅ Store uploaded files securely on the server.

✅ Generate a unique, sharable file link.

✅ Download files directly from the link.

✅ Send the file link via email with ease.

✅ Responsive and user-friendly UI.

🛠️ Tech Stack

🔹 Frontend:

React.js (for UI development)

Axios (for API requests)

CSS (for styling)

🔹 Backend:

Node.js & Express.js (server-side)

Multer (for file handling)

MongoDB & Mongoose (database)

Nodemailer (for email functionality)

dotenv (for managing environment variables)

📥 Installation and Setup

✅ Prerequisites

Ensure you have the following installed:

Node.js

MongoDB (Local or Cloud)

🔹 Clone the Repository

git clone https://github.com/your-username/your-repo.git
cd your-repo

🔹 Backend Setup

Navigate to the server directory:

cd server

Install dependencies:

npm install

Create a .env file and add:

EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
MONGO_URI=mongodb+srv://your-mongodb-uri

Start the backend server:

npm start

Backend runs at http://localhost:5000

🔹 Frontend Setup

Navigate to the client directory:

cd client

Install dependencies:

npm install

Start the React app:

npm run dev

Frontend runs at http://localhost:5173

🔗 API Endpoints

🟢 1. Upload a File

POST /upload

Request Body: FormData containing the file.

Response: { filelink: "http://localhost:5000/files/filename" }

🟢 2. Download a File

GET /files/:filename

Response: Returns the requested file for download.

🟢 3. Send File Link via Email

POST /send-email

Request Body: { senderEmail, receiverEmail, filelink }

Response: { message: 'Email sent successfully!' }

🎯 How It Works

Upload a File: Select a file and click upload.

Get a Link: The backend stores the file and provides a sharable link.

Download Option: The recipient can download the file using the link.

Send via Email: Enter sender and recipient emails and send the link directly.

📂 Folder Structure

project-root/
│── client/               # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── index.js
│   │   ├── styles.css
│   ├── package.json
│   ├── .env
│── server/               # Node.js backend
│   ├── models/
│   │   ├── File.js
│   ├── server.js
│   ├── .env  
│   ├── package.json
│── uploads/              # Uploaded files
│── README.md             # Documentation

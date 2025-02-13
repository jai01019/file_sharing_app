
// const express = require('express');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const path = require('path');
// require('dotenv').config();

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("MongoDB connected"))
//     .catch((err) => console.log("Error connecting to MongoDB:", err));

// // File Storage Configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage: storage });

// // Create a schema for file data
// const fileSchema = new mongoose.Schema({
//   filename: String,
//   filelink: String,
// });

// const File = mongoose.model('File', fileSchema);

// // File upload endpoint
// app.post('/upload', upload.single('file'), async (req, res) => {
//   const newFile = new File({
//     filename: req.file.filename,
//     filelink: `http://localhost:5000/files/${req.file.filename}`,
//   });

//   await newFile.save();
//   res.status(201).json({ filelink: newFile.filelink });
// });

// // File download endpoint
// app.get('/files/:filename', (req, res) => {
//   const filePath = path.join(__dirname, 'uploads', req.params.filename);
//   res.download(filePath);
// });

// // Email sending logic
// const sendEmail = (senderEmail, receiverEmail, filelink) => {
//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   let mailOptions = {
//     from: senderEmail,
//     to: receiverEmail,
//     subject: 'File Sharing Link',
//     text: `Hello, here is the link to download the file: ${filelink}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log('Error sending email:', error); // Log errors
//     } else {
//       console.log('Email sent: ' + info.response); // Log success
//     }
//   });
// };

// // Email sending endpoint
// app.post('/send-email', (req, res) => {
//   const { senderEmail, receiverEmail, filelink } = req.body;

//   // Debugging: Log the incoming request data
//   console.log("Request received to send email with the following details:");
//   console.log("Sender Email:", senderEmail);
//   console.log("Receiver Email:", receiverEmail);
//   console.log("File Link:", filelink);

//   // Call the sendEmail function
//   sendEmail(senderEmail, receiverEmail, filelink);

//   // Respond to the client
//   res.status(200).json({ message: 'Email sent successfully!' });
// });

// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));











const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Error connecting to MongoDB:", err));

// File Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Allow all file types
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    cb(null, true); // Accept all files
  },
  limits: {
    fileSize: 50 * 1024 * 1024 // Limit file size to 50MB
  }
});

// Create a schema for file data
const fileSchema = new mongoose.Schema({
  filename: String,
  filelink: String,
});

const File = mongoose.model('File', fileSchema);

// File upload endpoint
app.post('/upload', upload.single('file'), async (req, res) => {
  const newFile = new File({
    filename: req.file.filename,
    filelink: `http://localhost:5000/files/${req.file.filename}`,
  });

  await newFile.save();
  res.status(201).json({ filelink: newFile.filelink });
});

// File download endpoint
app.get('/files/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'uploads', req.params.filename);
  res.download(filePath);
});

// Email sending logic
const sendEmail = (senderEmail, receiverEmail, filelink) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: senderEmail,
    to: receiverEmail,
    subject: 'File Sharing Link',
    text: `Hello, here is the link to download the file: ${filelink}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error); // Log errors
    } else {
      console.log('Email sent: ' + info.response); // Log success
    }
  });
};

// Email sending endpoint
app.post('/send-email', (req, res) => {
  const { senderEmail, receiverEmail, filelink } = req.body;

  // Debugging: Log the incoming request data
  console.log("Request received to send email with the following details:");
  console.log("Sender Email:", senderEmail);
  console.log("Receiver Email:", receiverEmail);
  console.log("File Link:", filelink);

  // Call the sendEmail function
  sendEmail(senderEmail, receiverEmail, filelink);

  // Respond to the client
  res.status(200).json({ message: 'Email sent successfully!' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

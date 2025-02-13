
// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [file, setFile] = useState(null);
//   const [fileLink, setFileLink] = useState('');
//   const [senderEmail, setSenderEmail] = useState('');
//   const [receiverEmail, setReceiverEmail] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await axios.post('http://localhost:5000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setFileLink(response.data.filelink);
//     } catch (error) {
//       setErrorMessage('File upload failed.');
//       console.error(error);
//     }
//   };

//   const handleSendEmail = async () => {
//     if (!senderEmail || !receiverEmail || !fileLink) {
//       alert('Please fill in all fields and upload a file!');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5000/send-email', {
//         senderEmail,
//         receiverEmail,
//         filelink: fileLink,
//       });
//       alert('Email sent successfully!');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       alert('Failed to send email');
//     }
//   };

//   return (
//     <div className="App">
//       <h1>File Upload and Email Sharing</h1>
//       <form onSubmit={handleUpload}>
//         <input
//           type="file"
//           accept=".pdf, image/*"
//           onChange={handleFileChange}
//           required
//         />
//         <button type="submit">Upload</button>
//       </form>

//       {fileLink && (
//         <div>
//           <p>File uploaded successfully!</p>
//           <p>
//             <a href={fileLink} target="_blank" rel="noopener noreferrer">
//               {fileLink}
//             </a>
//           </p>
//           <a href={fileLink} download>
//             <button>Download File</button>
//           </a>
//         </div>
//       )}

//       {fileLink && (
//         <div>
//           <h3>Send the File Link via Email</h3>
//           <input
//             type="email"
//             placeholder="Your Email"
//             value={senderEmail}
//             onChange={(e) => setSenderEmail(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Recipient's Email"
//             value={receiverEmail}
//             onChange={(e) => setReceiverEmail(e.target.value)}
//           />
//           <button onClick={handleSendEmail}>Send Link via Email</button>
//         </div>
//       )}

//       {errorMessage && <p>{errorMessage}</p>}
//     </div>
//   );
// }

// export default App;




// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [file, setFile] = useState(null);
//   const [fileLink, setFileLink] = useState('');
//   const [senderEmail, setSenderEmail] = useState('');
//   const [receiverEmail, setReceiverEmail] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await axios.post('http://localhost:5000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setFileLink(response.data.filelink);

//       // Clear the input fields after successful upload
//       setFile(null);
//       setSenderEmail('');
//       setReceiverEmail('');
//       e.target.reset(); // Clears the file input field in the form
//     } catch (error) {
//       setErrorMessage('File upload failed.');
//       console.error(error);
//     }
//   };

//   const handleSendEmail = async () => {
//     if (!senderEmail || !receiverEmail || !fileLink) {
//       alert('Please fill in all fields and upload a file!');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5000/send-email', {
//         senderEmail,
//         receiverEmail,
//         filelink: fileLink,
//       });
//       alert('Email sent successfully!');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       alert('Failed to send email');
//     }
//   };

//   return (
//     <div className="App">
//       <h1>File Upload and Email Sharing</h1>
//       <form onSubmit={handleUpload}>
//         <input
//           type="file"
//           accept=".pdf, image/*"
//           onChange={handleFileChange}
//           required
//         />
//         <button type="submit">Upload</button>
//       </form>

//       {fileLink && (
//         <div>
//           <p>File uploaded successfully!</p>
//           <p>
//             <a href={fileLink} target="_blank" rel="noopener noreferrer">
//               {fileLink}
//             </a>
//           </p>
//           <a href={fileLink} download>
//             <button>Download File</button>
//           </a>
//         </div>
//       )}

//       {fileLink && (
//         <div>
//           <h3>Send the File Link via Email</h3>
//           <input
//             type="email"
//             placeholder="Your Email"
//             value={senderEmail}
//             onChange={(e) => setSenderEmail(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Recipient's Email"
//             value={receiverEmail}
//             onChange={(e) => setReceiverEmail(e.target.value)}
//           />
//           <button onClick={handleSendEmail}>Send Link via Email</button>
//         </div>
//       )}

//       {errorMessage && <p>{errorMessage}</p>}
//     </div>
//   );
// }

// export default App;


// import App from './App.css'

// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [file, setFile] = useState(null);
//   const [fileLink, setFileLink] = useState('');
//   const [senderEmail, setSenderEmail] = useState('');
//   const [receiverEmail, setReceiverEmail] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile.size > 50 * 1024 * 1024) { // Check if file size exceeds 50 MB
//       setErrorMessage('File size exceeds the 50 MB limit.');
//       return;
//     }
//     setFile(selectedFile);
//     setErrorMessage('');
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (!file) {
//       setErrorMessage('Please select a file to upload.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await axios.post('http://localhost:5000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setFileLink(response.data.filelink);
//       setFile(null); // Reset file input
//       e.target.reset(); // Clear the form fields
//     } catch (error) {
//       setErrorMessage('File upload failed.');
//       console.error(error);
//     }
//   };

//   const handleSendEmail = async () => {
//     if (!senderEmail || !receiverEmail || !fileLink) {
//       alert('Please fill in all fields and upload a file!');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5000/send-email', {
//         senderEmail,
//         receiverEmail,
//         filelink: fileLink,
//       });
//       alert('Email sent successfully!');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       alert('Failed to send email');
//     }
//   };

//   return (
//     <div className="App">
//       <h1>File Upload and Email Sharing</h1>
//       <form onSubmit={handleUpload}>
//         <input
//           type="file"
//           accept="*"
//           onChange={handleFileChange}
//           required
//         />
//         <button type="submit">Upload</button>
//       </form>

//       {fileLink && (
//         <div>
//           <p>File uploaded successfully!</p>
//           <p>
//             <a href={fileLink} target="_blank" rel="noopener noreferrer">
//               {fileLink}
//             </a>
//           </p>
//           <a href={fileLink} download>
//             <button>Download File</button>
//           </a>
//         </div>
//       )}

//       {fileLink && (
//         <div>
//           <h3>Send the File Link via Email</h3>
//           <input
//             type="email"
//             placeholder="Your Email"
//             value={senderEmail}
//             onChange={(e) => setSenderEmail(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Recipient's Email"
//             value={receiverEmail}
//             onChange={(e) => setReceiverEmail(e.target.value)}
//           />
//           <button onClick={handleSendEmail}>Send Link via Email</button>
//         </div>
//       )}

//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//     </div>
//   );
// }

// export default App;



import './app.css';
import React, { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [fileLink, setFileLink] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [receiverEmail, setReceiverEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile.size > 50 * 1024 * 1024) {
      setErrorMessage('File size exceeds the 50 MB limit.');
      return;
    }
    setFile(selectedFile);
    setErrorMessage('');
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setErrorMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setFileLink(response.data.filelink);
      setFile(null);
      e.target.reset();
    } catch (error) {
      setErrorMessage('File upload failed.');
      console.error(error);
    }
  };

  const handleSendEmail = async () => {
    if (!senderEmail || !receiverEmail || !fileLink) {
      alert('Please fill in all fields and upload a file!');
      return;
    }

    try {
      await axios.post('http://localhost:5000/send-email', {
        senderEmail,
        receiverEmail,
        filelink: fileLink,
      });
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };

  return (
    <div className="app-container">
      <div className="app-wrapper">
        <h1 className="app-title">File Upload and Email Sharing</h1>
        <form onSubmit={handleUpload} className="upload-form">
          <label className="file-label">Select a file to upload:</label>
          <input
            type="file"
            accept="*"
            onChange={handleFileChange}
            required
            className="file-input"
          />
          <button type="submit" className="upload-button">Upload</button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {fileLink && (
          <div className="file-info">
            <p className="file-success">File uploaded successfully!</p>
            <p className="file-link">
              <a href={fileLink} target="_blank" rel="noopener noreferrer">
                {fileLink}
              </a>
            </p>
            <a href={fileLink} download>
              <button className="download-button">Download File</button>
            </a>
          </div>
        )}

        {fileLink && (
          <div className="email-section">
            <h3 className="email-title">Send the File Link via Email</h3>
            <div className="email-inputs">
              <input
                type="email"
                placeholder="Your Email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                className="email-input"
              />
              <input
                type="email"
                placeholder="Recipient's Email"
                value={receiverEmail}
                onChange={(e) => setReceiverEmail(e.target.value)}
                className="email-input"
              />
            </div>
            <button
              onClick={handleSendEmail}
              className="send-button"
            >
              Send Link via Email
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

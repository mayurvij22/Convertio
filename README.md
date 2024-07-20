Word to PDF Converter

Welcome to the Word to PDF Converter project! This application allows users to upload Microsoft Word documents and convert them to PDF format seamlessly.
Features

    File Upload: Users can easily upload .doc or .docx files from their local machine.
    Real-time Conversion: Instant conversion of Word documents to PDF format.
    Downloadable PDFs: Converted PDFs are available for immediate download.
    Responsive UI: User-friendly and responsive interface for a smooth experience across devices.

Technologies Used

    Backend:
        Node.js
        Express
        Multer (for handling file uploads)
        docx-pdf (for converting Word documents to PDF)
    Frontend:
        React
        Axios (for making HTTP requests)
        Tailwind CSS (for styling)
        React Icons

Installation

    Clone the repository

    sh

git clone https://github.com/yourusername/word-to-pdf-converter.git
cd word-to-pdf-converter

Backend Setup

sh

cd backend
npm install
node app.js

Frontend Setup

sh

    cd ../frontend
    npm install
    npm start

Usage

    Navigate to http://localhost:3000 in your browser.
    Click on the "Choose File" button to upload your Word document.
    Click on the "Convert File" button to convert the document to PDF.
    Download the converted PDF file.

Project Structure

    Backend (backend): Contains the Express server and file conversion logic.
    Frontend (frontend): Contains the React application for the user interface.

Contributing

We welcome contributions to improve this project! Feel free to submit a pull request or open an issue for any bugs or feature requests.

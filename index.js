const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();
const docxConverter = require("docx-pdf");
const path = require("path");
const fs = require("fs");

// Enable CORS
app.use(cors());

// Ensure the directories exist
const uploadDir = path.join(__dirname, "uploads");
const filesDir = path.join(__dirname, "files");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
if (!fs.existsSync(filesDir)) fs.mkdirSync(filesDir);

// Setting for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/convertFile", upload.single("file"), function (req, res, next) {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    let outPath = path.join(
      filesDir,
      `${path.parse(req.file.originalname).name}.pdf`
    );

    docxConverter(req.file.path, outPath, function (err, result) {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "File conversion failed" });
      }

      res.download(outPath, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "File download failed" });
        }

        // Clean up the uploaded and converted files if needed
        fs.unlink(req.file.path, (err) => {
          if (err)
            console.error(`Failed to delete temp file: ${req.file.path}`);
        });
        fs.unlink(outPath, (err) => {
          if (err) console.error(`Failed to delete output file: ${outPath}`);
        });
      });

      console.log("Conversion result:", result);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

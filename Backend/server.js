const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs"); // Include fs module
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Files
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Middleware
app.use(cors({ origin: "http://localhost:3001" })); // Ensure React is on port 3001
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Sample data route
app.get("/getData", (req, res) => {
  const sampleData = {
    message: "Hello from the backend!",
    timestamp: new Date(),
  };
  res.json(sampleData);
});

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Save with a unique name
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error("Only .jpeg, .png, .pdf formats are allowed."));
    }
    cb(null, true);
  },
  limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB limit
});

// File upload route
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.status(200).send({
    message: "File uploaded successfully.",
    fileName: req.file.filename,
  });
});

// Global error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something went wrong!", error: err.message });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

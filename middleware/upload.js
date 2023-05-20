const multer = require('multer');

// Create a multer storage instance
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set the destination folder where the uploaded files will be stored
    cb(null, './client/public/uploads/'); // Replace 'uploads' with your desired folder path
  },
  filename: (req, file, cb) => {
    // Set the filename for the uploaded file
    cb(null, file.originalname);
  },
});

// Create a multer upload instance using the storage configuration
const upload = multer({ storage });

module.exports = upload;

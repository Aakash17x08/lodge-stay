# LodgeStay

LodgeStay is a full-stack project that includes CRUD operations. It uses a database to store data and allows users to add their own listings or houses for rent. Essentially, it functions as an Airbnb clone.

## Features

- Users can create, read, update, and delete listings.
- Authentication and authorization for secure user management.
- Image uploads using Cloudinary.
- Flash messages for user notifications.

## Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** EJS, EJS-Mate
- **Authentication:** Passport.js, Passport-Local, Passport-Local-Mongoose
- **Storage:** Multer, Cloudinary
- **Validation:** Joi

## Installation

To set up the project locally, follow these steps:

### Prerequisites

Make sure you have **Node.js** and **MongoDB** installed on your system.

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/Aakash17x08/lodge-stay.git
   cd lodge-stay
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add your environment variables:
   ```env
   CLOUD_NAME=your_cloudinary_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ```
4. Start the server:
   ```sh
   node index.js
   ```
5. Open your browser and visit:
   ```
   http://localhost:8080
   ```

## Installed Packages & Their Purpose

### **Core Backend Packages**

- **express** – Web framework for Node.js.
- **mongoose** – ODM (Object Document Mapper) for MongoDB.
- **dotenv** – Loads environment variables from a `.env` file.
- **method-override** – Enables HTTP methods like `PUT` and `DELETE` in forms.
- **ejs** – Embedded JavaScript templating engine.
- **ejs-mate** – Layout support for EJS templates.

### **Authentication & Security**

- **passport** – Authentication middleware.
- **passport-local** – Local authentication strategy for Passport.
- **passport-local-mongoose** – Simplifies user authentication with Mongoose.
- **express-session** – Session management for user authentication.
- **connect-flash** – Flash messages for user notifications.

### **File Uploads & Cloud Storage**

- **multer** – Middleware for handling file uploads.
- **multer-storage-cloudinary** – Cloudinary integration for Multer.
- **cloudinary** – Cloud-based media storage and processing.

### **Validation**

- **joi** – Schema validation for user input.

##

## Author

**Aakash**

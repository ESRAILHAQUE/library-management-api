
## 📚 Library Management API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge\&logo=typescript\&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)

A RESTful API for managing books and borrowing records in a library system, built with **Express.js**, **TypeScript**, and **MongoDB (Mongoose)**.

---

### 🚀 Features

* 📘 Add, update, delete, and view books
* 🧾 Borrow books with due date tracking
* 🔄 Auto-updates book availability
* 📊 Get borrowing summaries using MongoDB aggregation
* ✅ Schema validation and unified error handling
* 📁 Scalable MVC architecture

---

### 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **TypeScript**
* **MongoDB** with **Mongoose**
* **ts-node-dev** for live development
* **dotenv** for environment variable management

---

### 📁 Project Structure

```
src/
├── app.ts               # Express app configuration
├── server.ts            # Application entry point
├── config/              # MongoDB connection setup
├── interfaces/          # TypeScript type definitions
├── models/              # Mongoose models
├── controllers/         # Business logic
├── routes/              # Express routes
├── middlewares/         # Custom middleware (errors, etc.)
```

---

### ⚙️ Getting Started

#### 1️⃣ Clone the repo

```bash
git clone https://github.com/ESRAILHAQUE/library-management-api.git
cd library-management-api
```

#### 2️⃣ Install dependencies

```bash
npm install
```

#### 3️⃣ Configure `.env` file

Create a `.env` in the root:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/library-db
```

#### 4️⃣ Run the server

* Development:

```bash
npm run dev
```

* Production:

```bash
npm run start
```

---

### 📘 API Endpoints

#### 📚 Book Endpoints

| Method | Endpoint         | Description                           |
| ------ | ---------------- | ------------------------------------- |
| POST   | `/api/books`     | Add a new book                        |
| GET    | `/api/books`     | List all books with filters & sorting |
| GET    | `/api/books/:id` | Get details of a specific book        |
| PUT    | `/api/books/:id` | Update book details                   |
| DELETE | `/api/books/:id` | Delete a book                         |

#### 📖 Borrow Endpoints

| Method | Endpoint      | Description             |
| ------ | ------------- | ----------------------- |
| POST   | `/api/borrow` | Borrow a book           |
| GET    | `/api/borrow` | Get borrowing summaries |

---

### 🔎 Example Query

```http
GET /api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5
```

---

### 📦 Scripts

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "build": "tsc",
  "start": "npm run build && node dist/server.js"
}
```

---

### 🔐 Error Response Format

```json
{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    "errors": {
      "copies": {
        "message": "Copies must be a positive number",
        "kind": "min"
      }
    }
  }
}
```

---

### Live Link



- ✅ [Live Demo](https://library-management-api-sooty-chi.vercel.app/)



---

### 👨‍💻 Author

* **Name:** Esrail Haque
* 🔗 GitHub: [@ESRAILHAQUE](https://github.com/ESRAILHAQUE)




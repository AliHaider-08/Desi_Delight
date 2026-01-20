# Desi Delight Backend (MVC)

## Overview

This is the backend for **Desi Delight** built with:

- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication

Default port: **5000**

## Folder Structure

```text
Backend/
  config/
  controllers/
  middleware/
  models/
  routes/
  .env
  server.js
```

## Setup

### 1) Create `.env`

Edit `Backend/.env`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/desi_delight
JWT_SECRET=change_me
JWT_EXPIRES_IN=7d
```

- `MONGO_URI` should start with **`mongodb://`** or **`mongodb+srv://`**.
- Replace `JWT_SECRET` with a strong random secret.

### 2) Install dependencies

Run inside `Backend/` folder:

```bash
npm install
```

### 3) Start server

Run inside `Backend/` folder:

```bash
npm run dev
```

Server should log:

- `Server running on port 5000`
- `MongoDB Connected: ...`

## Troubleshooting

### MongoDB connection error: Invalid scheme

If you see:

`Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"`

Fix:

- Ensure `.env` has:

`MONGO_URI=mongodb://localhost:27017/desi_delight`

- No quotes, no extra characters.
- Restart the server.

## Postman Testing Guide

### Base URL

- Base: `http://localhost:5000`
- Health check: `GET http://localhost:5000/`

> Note: Postman test tab se pehle backend run hona chahiye.

---

## 1) Auth APIs

### A) Register

- **POST** `http://localhost:5000/api/auth/register`
- **Headers**
  - `Content-Type: application/json`
- **Body (raw JSON)**

```json
{
  "fullName": "Ali Khan",
  "email": "ali@test.com",
  "password": "123456",
  "phone": "03001234567",
  "address": "Lahore"
}
```

Response me `token` milega. Is token ko copy kar lein.

### B) Login

- **POST** `http://localhost:5000/api/auth/login`
- **Headers**
  - `Content-Type: application/json`
- **Body (raw JSON)**

```json
{
  "email": "ali@test.com",
  "password": "123456"
}
```

### C) Profile (Protected)

- **GET** `http://localhost:5000/api/auth/profile`
- **Headers**
  - `Authorization: Bearer <PASTE_TOKEN_HERE>`

---

## 2) Menu APIs

### A) Get all menu items (Public)

- **GET** `http://localhost:5000/api/menu`

### B) Add menu item (Admin only)

- **POST** `http://localhost:5000/api/menu`
- **Headers**
  - `Content-Type: application/json`
  - `Authorization: Bearer <ADMIN_TOKEN>`
- **Body (raw JSON)**

```json
{
  "name": "Chicken Biryani",
  "description": "Spicy desi biryani",
  "price": 450,
  "category": "Rice & Biryani",
  "imageUrl": "https://example.com/biryani.jpg",
  "spiceLevel": 3,
  "tags": ["Halal"],
  "inStock": true
}
```

**Admin token kaise milega?**

Register ke baad user ka `role` default `customer` hota hai.
Admin testing ke liye MongoDB Compass me us user document me:

- `role: "admin"`

set kar dein, phir login karke admin token le lein.

### C) Update menu item (Admin)

- **PUT** `http://localhost:5000/api/menu/<MENU_ID>`
- **Headers**
  - `Content-Type: application/json`
  - `Authorization: Bearer <ADMIN_TOKEN>`
- **Body example**

```json
{
  "price": 500,
  "inStock": false
}
```

### D) Delete menu item (Admin)

- **DELETE** `http://localhost:5000/api/menu/<MENU_ID>`
- **Headers**
  - `Authorization: Bearer <ADMIN_TOKEN>`

---

## 3) Orders APIs

### A) Place new order (Protected)

- **POST** `http://localhost:5000/api/orders`
- **Headers**
  - `Content-Type: application/json`
  - `Authorization: Bearer <TOKEN>`
- **Body (raw JSON)**

```json
{
  "items": [
    { "name": "Chicken Biryani", "quantity": 2, "price": 450, "notes": "Less spicy" },
    { "name": "Raita", "quantity": 1, "price": 80 }
  ],
  "type": "delivery",
  "paymentMethod": "cod",
  "shippingAddress": "House 10, Street 2, Lahore",
  "contactNumber": "03001234567",
  "isUrgent": false
}
```

### B) My orders (Protected)

- **GET** `http://localhost:5000/api/orders/my-orders`
- **Headers**
  - `Authorization: Bearer <TOKEN>`

### C) All orders (Admin)

- **GET** `http://localhost:5000/api/orders/all`
- **Headers**
  - `Authorization: Bearer <ADMIN_TOKEN>`

### D) Update order status (Admin)

- **PUT** `http://localhost:5000/api/orders/<ORDER_ID>/status`
- **Headers**
  - `Content-Type: application/json`
  - `Authorization: Bearer <ADMIN_TOKEN>`
- **Body (raw JSON)**

```json
{
  "status": "cooking"
}
```

Allowed: `pending`, `cooking`, `ready`, `delivered`

---

## 4) Reservations APIs

### A) Create reservation (Public)

- **POST** `http://localhost:5000/api/reservations`
- **Headers**
  - `Content-Type: application/json`
- **Body (raw JSON)**

```json
{
  "name": "Sara",
  "email": "sara@test.com",
  "phone": "03111222333",
  "date": "2026-01-25T00:00:00.000Z",
  "time": "08:30 PM",
  "guests": 4,
  "occasion": "Birthday",
  "specialRequests": "Near window",
  "tablePreference": "Family",
  "seatingArea": "Indoor",
  "dietaryRestrictions": ["No nuts"],
  "celebrationDetails": { "name": "Sara", "message": "Happy Birthday!" }
}
```

### B) Get all reservations (Admin)

- **GET** `http://localhost:5000/api/reservations`
- **Headers**
  - `Authorization: Bearer <ADMIN_TOKEN>`

---

## Quick checklist (Postman)

- `Content-Type: application/json`
- Auth header:
  - `Authorization: Bearer <token>`
- Base URL:
  - `http://localhost:5000`

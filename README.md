# 🏥 Clinic Management System

A full-stack clinic management system enabling seamless communication between doctors and receptionists — built with the MERN stack (MongoDB, Express, React, Node.js).

**🔗 Live Demo:** [https://cms-oe8d.onrender.com](#) *(replace with your Vercel frontend link)*
**📦 Repository:** [github.com/Saloni5099/clinic_management_sys](https://github.com/Saloni5099/clinic_management_sys)

---

## Tech Stack

**Frontend:** React, React Router, Axios, React Hot Toast
**Backend:** Node.js, Express.js, Mongoose
**Database:** MongoDB Atlas
**Auth/Security:** bcrypt (password hashing), Joi (validation)
**Deployment:** Vercel (frontend), Render (backend), MongoDB Atlas (database)

---

## Table of Contents

- [Features](#features)
- [Workflow](#workflow)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)

---

## Features

1. **Multi-User Roles**
   Separate portals and permissions for Receptionist and Doctor.

2. **Patient Records**
   Maintains electronic health records per patient, including allergies, past illnesses, and surgeries.

3. **Token-Based Queue System**
   Each patient gets a unique token ID at registration, used to track their visit across the receptionist and doctor workflow.

4. **Prescription History**
   Doctors can view a patient's full prescription history before consultation.

5. **Billing**
   Receptionist generates billing based on consultation and prescribed medication.

6. **Flexible Patient Retrieval**
   - If a patient visits later than expected (e.g. next day), the same token ID still works.
   - If the token ID is lost, patient details can be retrieved using their phone number instead.

---

## Workflow

### 1. Patient Registration & Token Generation
The patient visits the receptionist and shares their details. The receptionist registers them and generates a unique token ID.

### 2. Doctor Consultation
The doctor looks up the patient using their token ID, views prior prescriptions/history, and adds a new prescription after consultation.

### 3. Billing
The receptionist retrieves the patient's token ID, reviews the consultation and prescribed medication, and generates the final bill.

---

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account (or a local MongoDB instance)

### 1. Clone the repository
```bash
git clone https://github.com/Saloni5099/clinic_management_sys
cd clinic_management_sys
```

### 2. Backend setup
```bash
cd server
npm install
```

Create a `.env` file inside `server/` with:
```env
MONGO_URI=your_mongodb_connection_string
SALT=10
```

Start the backend:
```bash
npm start
```
Server runs on `http://localhost:3006` by default.

### 3. Frontend setup
Open a new terminal:
```bash
cd client
npm install
```

Create a `.env` file inside `client/` with:
```env
REACT_APP_API_BASE_URL=http://localhost:3006
```

Start the frontend:
```bash
npm start
```
App runs on `http://localhost:3000` by default.

---

## Usage

> ⚠️ No demo accounts are publicly listed here for security. To try the app, register a new Doctor and Receptionist account from the sign-up screen, then log in with those credentials.

### Receptionist
1. Sign up / log in to the receptionist panel.
2. Register a new patient and generate a unique token ID.
3. Share the token ID with the patient for future visits.
4. After the doctor's consultation, retrieve the patient via token ID (or phone number) to generate the bill.

### Doctor
1. Sign up / log in to the doctor panel.
2. Enter a patient's token ID to view their history and prior prescriptions.
3. Add a new prescription after consultation.

---


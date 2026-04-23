# 🚀 MediTravel Assist

**Find trusted doctors. Know the cost. Get treated confidently.**

---

## 🌐 Live Design (Figma)

👉 https://www.figma.com/design/Teb0pDx2i9aahfQyp6taL5/Untitled?node-id=0-1&t=L99f3pYShD5IEv83-1

---

## 📌 Problem Statement

Travelers often face **medical uncertainty** in unfamiliar cities:

* ❌ Unable to find **trusted doctors or hospitals**
* 🌍 **Language barriers** with healthcare providers
* 💰 No clarity on **consultation or treatment costs**
* ⚠️ Risk of **overcharging or wrong treatment**

---

## 💡 Solution

**MediTravel Assist** is a smart healthcare platform that helps travelers:

* 🔍 Find doctors based on **location & need**
* ✅ Access **verified doctors** with trust badges
* 💬 Choose doctors based on **language compatibility**
* 💰 View **transparent consultation & treatment costs**
* 📍 Discover **nearby clinics with availability**
* 🚨 Get **instant emergency assistance**

---

## 🎯 Features

### 🏠 Home Page

* Smart **symptom / doctor search**
* Quick categories (General, Emergency, Specialist)
* Clean and user-friendly UI

---

### 🔍 Doctor Search

* Filter by:

  * Language 🌍
  * Specialization 🏥
  * Price 💰
  * Distance 📍
* Verified doctor badge ✅
* Ratings & reviews ⭐

---

### 🏥 Doctor Profile

* Consultation fee 💰
* Estimated treatment cost 📊
* Languages spoken 🌍
* Experience & specialization
* Availability status

---

### 📍 Nearby Clinics

* Location-based results
* Distance sorting
* Status: Open / Closed

---

### 🌍 Language Support

* Filter doctors by language
* Multilingual UI (English / Hindi / Gujarati)

---

### 🚨 Emergency Mode

* One-click:

  * Call ambulance 🚑
  * Find nearest hospital 🏥
  * Emergency helpline 📞

---

### 👤 User Dashboard

* Saved doctors
* Appointment history
* Medical records (optional)

---

### 🔐 Authentication

* Login / Signup
* Form validation
* Secure user flow

---

## 🎨 Design System

**Theme: Clean Medical UI**

* Primary: `#2563EB`
* Secondary: `#0EA5A4`
* Background: `#FFFFFF`
* Card: `#F9FAFB`
* Text: `#111827`
* Success: `#22C55E`
* Danger: `#EF4444`

---

## 🛠 Tech Stack

**Frontend**

* React.js (Vite)
* Tailwind CSS

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB

**Other Tools**

* Axios (API calls)
* Formik + Yup (Form validation)
* Redux Toolkit (optional state management)

---

## 📁 Project Structure (Simple & Clean)

### 📦 Frontend (React)

```bash
client/
│
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # All pages (Home, Search, Profile)
│   ├── services/       # API calls (Axios)
│   ├── hooks/          # Custom hooks
│   ├── utils/          # Helper functions
│   ├── App.jsx
│   └── main.jsx
```

---

### ⚙️ Backend (Node + Express)

```bash
server/
│
├── config/
│   └── db.js           # MongoDB connection
│
├── models/             # Mongoose schemas
│   └── doctor.model.js
│
├── routes/             # API routes
│   └── doctor.routes.js
│
├── controllers/        # Business logic
│   └── doctor.controller.js
│
├── app.js              # Express app setup
└── server.js           # Server start file
```

---

## 🔁 User Flow

```text
Login → Home → Search Doctor → View Profile → Book / Contact → Dashboard
```

---

## ⚡ UX Features

* Skeleton loaders
* Error & empty states
* Toast notifications
* Fully responsive design
* Smooth animations

---

## 📦 Storage

* `localStorage` → theme, user preferences
* `sessionStorage` → filters, temporary data

---

## 📊 Future Enhancements

* 🤖 AI-based symptom checker
* 📡 Real-time doctor availability
* 🌍 In-app translation chat
* 🛡️ Travel insurance integration
* 🎙️ Voice assistant support

---

## 🧠 Key Highlights

* ✔️ Solves real-world healthcare problem for travelers
* ✔️ Focus on **Trust + Transparency + Accessibility**
* ✔️ Simple & scalable MERN architecture
* ✔️ Hackathon-ready project

---

## 👨‍💻 Author

**Ankit Singh**

---

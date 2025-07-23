# 🩺 Shedula V2.0 – Doctor Appointment Scheduling Web App

Shedula is a modern, responsive web app for booking doctor appointments. Built with **Next.js (TypeScript)** and **Tailwind CSS**, it offers a clean UI/UX experience for selecting doctors and scheduling appointments — all using mock API data (no backend).

---

## 🚀 Features

- 🧑‍⚕️ Browse and select doctors from a stylish card layout
- 🗓️ Book appointments via clean form interfaces
- ⚡ Built with **Next.js 14** and **TypeScript**
- 🎨 Responsive UI using **Tailwind CSS**
- ✅ Form validation via **React Hook Form** or **Formik + Yup**
- 🔁 Mock API via **JSON Server** or static `.json` files
- 📦 Fully client-side (`use client`) with reusable components

---

## 🧰 Tech Stack

| Technology       | Purpose                          |
|------------------|----------------------------------|
| Next.js (App Router) | React-based framework (TypeScript support) |
| Tailwind CSS     | Utility-first responsive styling |
| React Hook Form / Formik + Yup | Form handling & validation |
| JSON Server / Static JSON | Mock API calls               |

---

## 📁 Folder Structure

project-root/
├── app/
│ └── book-appointment/
│ └── page.tsx
├── components/
│ └── DoctorCard.tsx
├── data/
│ └── doctors.json
├── types/
│ └── index.ts
├── styles/
│ └── globals.css
├── public/
│ └── images/
├── tsconfig.json
└── README.md


---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/JahnaviPonna/shedula-v2-app.git
cd shedula-v2-app

```

## Install Dependencies

```bash
npm install
```
---

## Run the Development Server

```bash
npm run dev
```


## Mock API Options

doctors.json is imported directly from /data folder.
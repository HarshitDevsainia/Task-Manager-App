## 📘 Advanced Task Manager App

A modern and responsive Task Manager App built using React (JavaScript) and Tailwind CSS, featuring task creation, filtering, local storage persistence, drag-and-drop support, dark/light theme, and smooth UI animations. Designed to demonstrate clean architecture, advanced React concepts, and polished UI/UX.

---

## 🚀 Features

# ✅ Core Functionalities

- Add tasks

- Delete tasks

- Mark tasks as completed

- Filter tasks (All / Pending / Completed)

- Clear completed tasks

## 💾 Data Persistence

- All tasks are saved using LocalStorage

- Theme preference (dark/light) also persists

# ⚛️ React Advanced Concepts

- Context API for global state management

- Custom Hook — useLocalStorage

- React.memo, useCallback, useMemo for optimization

- Smooth drag & drop using @hello-pangea/dnd

# 🎨 UI & UX Enhancements

- Fully responsive (mobile-first)

- Clean and modern UI using Tailwind CSS

- Smooth animations for add/remove

- Custom beautiful scrollbars (light + dark support)

- Dark/Light theme toggle

- Scroll-only task list area

- Minimal icon system

## 🛠️ Tech Stack

- React (JavaScript)

- Tailwind CSS

- React Router

- Context API

- @hello-pangea/dnd (Drag & Drop)

- LocalStorage API

## 📂 Project Structure

```bash
src/
│
├── components/
│   ├── TaskInput.jsx
│   ├── TaskItem.jsx
│   ├── FilterBar.jsx
│   ├── Header.jsx
│   ├── MainArea.jsx
│   ├── Icon.jsx
│
├── context/
│   └── TaskContext.jsx
│
├── hooks/
│   └── useLocalStorage.js
│
├── pages/
│   └── AdvancedTaskManager.jsx   (Main exported page)
│
└── index.js
```

# 📦 Installation

# 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd TaskManagerApp
```

# 2️⃣ Install dependencies

```bash
npm install
```

# 3️⃣ Install drag-and-drop library

```bash
npm install @hello-pangea/dnd
```

# 4️⃣ Start the app

```bash
npm start
```

# 🧩 Usage

- Type a task and click Add

- Drag tasks to reorder them

- Use filters to sort tasks

- Toggle theme using the top-right button

- Completed tasks show a check icon

- Data stays even after refresh

## Developed By

Harshit Soni
# 🐱‍🏍 Luna Edge - Pokémon Trainer App

This is a technical task for the **Frontend Developer** position at **Luna Edge**.  
The app allows a Pokémon Trainer to create their team of 4 Pokémon and view a summary in a modal window.

---

## 🔗 Links

- **Live Demo**: [DEMO](https://luna-task.vercel.app)
- **Storybook**: [STORYBOOK](https://luna-task-f94d.vercel.app)
- **GitHub Repository**: [REPO](https://github.com/etopritika/luna-task)

---

## 📦 Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **Zustand** (Global State)
- **React Hook Form + Zod** (Validation)
- **TailwindCSS** (Styling)
- **Axios** (HTTP Requests)
- **Storybook 8.6.4**

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/etopritika/luna-task.git
cd luna-task
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Start the development server

```bash
yarn dev
```

The app will be running at ➡️ http://localhost:5173/

---

## 📖 Running Storybook

```bash
yarn storybook
```

Storybook will be running at ➡️ http://localhost:6006/

---

## ✅ Requirements Covered

- ✅ React, TypeScript, TailwindCSS, React Hook Form, Zustand, Axios
- ✅ Select component with search and filtering capabilities
- ✅ Only 4 Pokémon can be selected
- ✅ Modal with the trainer's summary and Pokémon team
- ✅ Validation for trainer's first name and last name (2-12 characters, a-z / A-Z)
- ✅ Step-by-step flow for entering trainer data and selecting Pokémon
- ✅ Storybook documentation with a focus on the Select component
- ✅ TailwindCSS integration in Storybook
- ✅ Clean component structure and reusable logic

---

## ✨ Features

- **Global state management** with Zustand for trainer and team
- **Keyboard support**: Escape key closes dropdowns and modal
- **Overlay click closes modal and dropdowns**
- **Responsive, accessible and user-friendly UI**
- **UX-focused logic**: Button text and states guide the user (e.g. `Select 4 Pokémon`)
- **Fully documented components in Storybook**

---

## 📂 Project Structure

```
src
├── components
│   ├── TrainerForm
│   ├── PokemonSelect
│   ├── Select (custom select component)
│   └── TeamModal
├── hooks
│   └── useEscapeKey.ts
├── lib
│   └── types.ts
├── providers
│   └── Modal
├── store
│   └── use-team-store.ts
└── pages
    └── HomePage.tsx
```

---

## 📋 Scripts

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `yarn dev`       | Start the development server |
| `yarn build`     | Build for production         |
| `yarn preview`   | Preview the production build |
| `yarn storybook` | Start Storybook              |

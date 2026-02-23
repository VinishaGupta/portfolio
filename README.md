# Vinisha Portfolio

Personal portfolio built with a React frontend and Node.js (Express) backend.

## Tech Stack
- Frontend: React + Vite + CSS
- Backend: Node.js + Express

## Current Sections
- Hero
- About Me
- Featured Project Experience

## Run Locally

### 1. Start backend
```bash
cd backend
npm install
npm run dev
```
Backend runs on `http://localhost:4000`.

### 2. Start frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`.

## Project Structure
```text
portfolio/
  backend/
    server.js
    package.json
  frontend/
    src/
      App.jsx
      main.jsx
      styles.css
    index.html
    vite.config.js
    package.json
```

## Notes
- Frontend fetches profile content from `GET /api/profile`.
- Navigation currently uses unnumbered labels.

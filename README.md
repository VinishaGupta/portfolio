# Vinisha Gupta Portfolio

A full-stack personal portfolio built with a React frontend and a Node.js/Express backend.
The project presents profile content, experience, featured work, and contact links in a modern single-page layout.

## Features
- Responsive one-page portfolio layout
- Smooth section scrolling from navbar
- Scroll-based reveal animations
- Featured project cards with live preview and external links
- Contact section with direct email, GitHub, and LinkedIn actions
- Resume link that opens a hosted PDF

## Tech Stack

### Frontend
- React 18
- Vite 6
- CSS3 (custom styling + animations)
- JavaScript (ES6+)

### Backend
- Node.js
- Express 4
- CORS middleware

## Dependencies

### Frontend (`frontend/package.json`)
- `react@^18.3.1`
- `react-dom@^18.3.1`
- `vite@^6.0.5` (dev)
- `@vitejs/plugin-react@^4.3.4` (dev)

### Backend (`backend/package.json`)
- `express@^4.21.2`
- `cors@^2.8.5`

## Prerequisites
- Node.js (recommended: v20+; tested in this setup with v22)
- npm (comes with Node.js)

## Getting Started

### 1. Clone and enter project
```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Install dependencies
```bash
cd backend
npm install
cd ../frontend
npm install
```

## Run the Application (Development)

Open two terminals:

### Terminal 1: Backend
```bash
cd backend
npm run dev
```
Backend runs at: `http://localhost:4000`

### Terminal 2: Frontend
```bash
cd frontend
npm run dev
```
Frontend runs at: `http://localhost:5173`

## Production Commands

### Backend
```bash
cd backend
npm start
```

### Frontend build + preview
```bash
cd frontend
npm run build
npm run preview
```

## Available Scripts

### Backend scripts
- `npm run dev` - Start backend in watch mode
- `npm start` - Start backend normally

### Frontend scripts
- `npm run dev` - Start Vite development server
- `npm run build` - Build frontend for production
- `npm run preview` - Preview production build locally

## API
- `GET /api/profile` - Returns hero/profile data consumed by the frontend

## Project Structure
```text
portfolio/
  backend/
    package.json
    server.js
  frontend/
    index.html
    package.json
    vite.config.js
    public/
      favicon.svg
      VinishaGupta_Resume.pdf
    src/
      App.jsx
      main.jsx
      styles.css
```

## Author
Vinisha Gupta

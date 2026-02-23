# Vinisha Gupta - Developer Portfolio

A modern, full-stack personal portfolio built with React (Vite) and Node.js/Express, designed to showcase my profile, technical skills, experience, and featured projects in a clean, responsive single-page application.

The project focuses on performance, simplicity, and structured architecture while maintaining a smooth user experience.

## Highlights

- Fully responsive single-page layout
- Smooth navigation with section-based scrolling
- Scroll-triggered reveal animations
- Dynamic featured project cards with live demo & external links
- Contact section with quick access to Email, GitHub, and LinkedIn
- Resume download via hosted PDF
- Lightweight Express backend serving profile data

## Tech Stack

### Frontend

- React 18
- Vite 6
- JavaScript (ES6+)
- Custom CSS (animations + responsive styling)

### Backend

- Node.js
- Express 4
- CORS middleware

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Install Dependencies

```bash
cd backend
npm install
cd ../frontend
npm install
```

## Running the Application (Development Mode)

Open two terminals:

### Backend

```bash
cd backend
npm run dev
```

Runs at: `http://localhost:4000`

### Frontend

```bash
cd frontend
npm run dev
```

Runs at: `http://localhost:5173`

## Production Build

### Backend

```bash
cd backend
npm start
```

### Frontend

```bash
cd frontend
npm run build
npm run preview
```

## API Endpoint

| Method | Endpoint       | Description                                      |
|--------|----------------|--------------------------------------------------|
| GET    | `/api/profile` | Returns profile/hero data consumed by frontend   |

## Project Structure

```text
portfolio/
|
|-- backend/
|   |-- server.js
|   `-- package.json
|
|-- frontend/
|   |-- index.html
|   |-- vite.config.js
|   |-- package.json
|   |-- public/
|   |   `-- VinishaGupta_Resume.pdf
|   `-- src/
|       |-- App.jsx
|       |-- main.jsx
|       `-- styles.css
```

## About Me

Vinisha Gupta  
Full-Stack Developer | MCA Student  
Focused on building scalable web applications using modern JavaScript frameworks and clean backend architecture.

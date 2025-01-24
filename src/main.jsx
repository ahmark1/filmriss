import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MovieFeedbackPage from './ratingpage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieFeedbackPage />
  </StrictMode>,
)

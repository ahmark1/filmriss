import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MovieFeedbackPage from './ratingpage.jsx'
import StarRatings from 'react-star-ratings'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieFeedbackPage />
  </StrictMode>,
)

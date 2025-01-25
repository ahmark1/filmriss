import React, { useState } from 'react';
import { Rating } from '@mui/material';
import axios from 'axios';

const MovieFeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (document.activeElement) {
      document.activeElement.blur();
    }
  
    const feedback = { rating, review, suggestion };
  
    try {
      const response = await axios.post('https://filmriss-backend.onrender.com/api/feedback', feedback);
      alert(response.data.message);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback. Please try again.');
    }
  
    setRating(0);
    setReview('');
    setSuggestion('');
  };

  const logoURL = 'https://unikino.s3.eu-north-1.amazonaws.com/filmriss.png';

  return (
    <div style={{ fontFamily: 'Oswald, sans-serif', margin: '0px', textAlign: 'center' }}>
      <img
        src={logoURL}
        alt="uniKino Logo"
        style={{ width: '150px', margin: '0px', marginBottom: '-60px' }}
      />
      <h1>Movie Feedback</h1>
      <img
        src="https://m.media-amazon.com/images/M/MV5BMzA5Zjg3MTAtM2FhZS00NTNjLTg3NjEtNWQ4MTRhZjhiNzVmXkEyXkFqcGc@._V1_.jpg"
        alt="Movie Poster"
        width={400}
        height={500}
      />
      <h1>The Boy and the Heron</h1>
      <Rating
        name="half-rating"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
        precision={0.5}
        size="large"
        sx={{
          fontSize: '3rem', // Adjust the size here, e.g., 3rem for even bigger stars
        }}
      />

      <form onSubmit={handleSubmit} style={{ marginTop: '20px', textAlign: 'left' }}>
        {/* Review */}
        <div style={{ marginTop: '20px' }}>
          <label>
            <strong>Write a Review:</strong>
          </label>
          <input
            value={review}
            onChange={(e) => setReview(e.target.value)}
            style={{
              fontFamily: 'Oswald, sans-serif',
              display: 'block',
              width: '100%',
              height: '80px',
              marginTop: '5px',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
            placeholder="What did you think of the movie?"
            required
          />
        </div>

        {/* Suggestions */}
        <div style={{ marginTop: '20px' }}>
          <label>
            <strong>Suggestions for Improvement:</strong>
          </label>
          <input
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            style={{
              fontFamily: 'Oswald, sans-serif',
              display: 'block',
              width: '100%',
              height: '80px',
              marginTop: '5px',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
            placeholder="How can we improve your experience?"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            display: 'block',
            margin: '20px auto',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default MovieFeedbackPage;

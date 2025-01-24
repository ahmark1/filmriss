import React, { useState } from 'react';


const MovieFeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedback = { rating, review, suggestion };
    console.log('Submitted Feedback:', feedback);
    alert('Thank you for your feedback!');
    setRating(0);
    setReview('');
    setSuggestion('');
  };
  const logoURL = 'https://unikino.s3.eu-north-1.amazonaws.com/filmriss.png';

  return (
    <div style={{ fontFamily: 'Oswald, sans-serif',  margin: '0px', textAlign: 'center'  }}>
      <img src={logoURL} alt="uniKino Logo" style={{ width: '150px', margin: '0px', marginBottom: '-60px',}} />
      <h1>Movie Feedback</h1>
      <img
        src="https://m.media-amazon.com/images/I/61bhukPM8ZL._AC_SL1500_.jpg"
        alt="Movie Poster"
       
        width={300} height={400}
      />
      <h1>Anatomy of a Fall</h1>

      <form onSubmit={handleSubmit} style={{ marginTop: '20px', textAlign: 'left' }}>
       {/* Custom Star Rating */}
      <div style={{ display: 'flex', alignItems: 'center', 
      justifyContent: 'center',  cursor: 'pointer', marginTop:'-35px' }}>
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <span 
              key={index}
              onMouseOver={() => handleMouseOver(ratingValue)}
              onClick={() => handleClick(ratingValue)}
              style={{
                
                color: ratingValue <= rating ? '#FFD700' : '#ccc', // Gold for selected stars
                fontSize: '60px',  // Star size
                margin: '0 5px',
              }}
            >
              ★
            </span>
          );
        })}
        </div>

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

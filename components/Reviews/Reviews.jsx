import React, {useState, useEffect} from 'react'
import './Reviews.css'

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  // Replace with your actual Google Places API key and place ID
  const apiKey = 'YOUR_API_KEY';
  const placeId = 'YOUR_PLACE_ID';

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}&fields=review`
      );
      const data = await response.json();
      setReviews(data.result.reviews.slice(0, 4)); // Get maximum 4 reviews
    };

    fetchReviews();
  }, []); // Empty dependency array to fetch reviews only once

  return (
    <div id='reviews' className="review-container">
      <h1>Customer Reviews</h1>
      <div className="review-cards">
        {reviews.map((review) => (
          <ReviewCard key={review.rating} review={review} />
        ))}
      </div>
      <hr/>
    </div>
  )
}
const ReviewCard = ({ review }) => {
  const { author_name, rating, text } = review;
  return (
    <div className="review-card">
      <div className="review-header">
        <span className="rating">{rating}</span> stars - {author_name}
      </div>
      <p className="review-text">{text}</p>
    </div>
  );
};

export default Reviews
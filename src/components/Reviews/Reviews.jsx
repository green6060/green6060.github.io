import { useState, useEffect, useRef } from "react";
import "./Reviews.css";
import googleReviewsService from "../../services/googleReviews";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isRequestInProgress = useRef(false);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchReviews = async () => {
      if (isRequestInProgress.current) {
        return;
      }

      isRequestInProgress.current = true;

      try {
        setLoading(true);
        const data = await googleReviewsService.getReviews(
          abortController.signal
        );

        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
          setRating(data.rating);
          setTotalRatings(data.totalRatings);
          setError(null);
        } else {
          setReviews([]);
          setError("No reviews available");
        }
      } catch (err) {
        if (err.name === "AbortError") {
          return;
        }
        setError("API unavailable");
        console.error("Error loading reviews:", err);
      } finally {
        setLoading(false);
        isRequestInProgress.current = false;
      }
    };

    fetchReviews();

    return () => {
      abortController.abort();
      isRequestInProgress.current = false;
    };
  }, []);

  const renderReviewCard = (review) => (
    <div key={review.time || review.author_name} className="review-card">
      <div className="review-header">
        <div className="reviewer-info">
          <h4>{review.author_name}</h4>
          <div className="stars">
            {googleReviewsService.getStarRating(review.rating)}
          </div>
        </div>
        <span className="review-date">
          {googleReviewsService.formatReviewDate(
            review.relative_time_description
          )}
        </span>
      </div>
      <p className="review-text">"{review.text}"</p>
    </div>
  );

  if (error || reviews.length === 0) {
    return (
      <section id="reviews" className="reviews">
        <div className="reviews-content">
          <h2>Customer Reviews</h2>

          <div className="no-reviews-section">
            <p>Be the first to leave a review!</p>

            <div className="google-cta">
              <a
                href="https://www.google.com/maps/place/Moxy+Tattoo/@40.6213805,-111.8627405,17z/data=!3m1!4b1!4m6!3m5!1s0x875285911e5c5433:0x73a45ddf5a4760c5!8m2!3d40.6213805!4d-111.8601656!16s%2Fg%2F11vzbxk9cl?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="google-review-btn combined"
              >
                <span className="btn-icon">⭐</span>
                View & Leave Google Reviews
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reviews" className="reviews">
      <div className="reviews-content">
        <h2>Customer Reviews</h2>

        <div className="google-reviews-section">
          <div className="reviews-header">
            <h3>Google Reviews</h3>
            {rating > 0 && (
              <div className="overall-rating">
                <span className="rating-number">{rating.toFixed(1)}</span>
                <div className="rating-stars">
                  {googleReviewsService.getStarRating(rating)}
                </div>
                <span className="total-ratings">({totalRatings} reviews)</span>
              </div>
            )}
          </div>

          {loading ? (
            <div className="loading-reviews">
              <div className="loading-spinner"></div>
              <p>Loading reviews...</p>
            </div>
          ) : (
            <div className="reviews-grid">{reviews.map(renderReviewCard)}</div>
          )}

          <div className="google-cta">
            <a
              href="https://www.google.com/maps/place/Moxy+Tattoo/@40.6213805,-111.8627405,17z/data=!3m1!4b1!4m6!3m5!1s0x875285911e5c5433:0x73a45ddf5a4760c5!8m2!3d40.6213805!4d-111.8601656!16s%2Fg%2F11vzbxk9cl?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="google-review-btn combined"
            >
              <span className="btn-icon">⭐</span>
              View & Leave Google Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;

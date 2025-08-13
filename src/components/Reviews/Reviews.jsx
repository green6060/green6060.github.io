import { useState, useEffect } from "react";
import "./Reviews.css";
import googleReviewsService from "../../services/googleReviews";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const data = await googleReviewsService.getReviews();

        // Only show component if we have real reviews from the API
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
          setRating(data.rating);
          setTotalRatings(data.totalRatings);
          setError(null);
        } else {
          // No real reviews available, don't show component
          setReviews([]);
          setError("No reviews available");
        }
      } catch (err) {
        // API failed, don't show component
        setError("API unavailable");
        console.error("Error loading reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const renderReviewCard = (review) => (
    <div key={review.time || review.author_name} className="review-card">
      <div className="review-header">
        <div className="reviewer-info">
          <img
            src={review.profile_photo_url || "/images/default-avatar.png"}
            alt={review.author_name}
            className="reviewer-avatar"
            onError={(e) => {
              e.target.src = "/images/default-avatar.png";
            }}
          />
          <div>
            <h4>{review.author_name}</h4>
            <div className="stars">
              {googleReviewsService.getStarRating(review.rating)}
            </div>
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

  // If no reviews available, show only the buttons
  if (error || reviews.length === 0) {
    return (
      <section id="reviews" className="reviews">
        <div className="reviews-content">
          <h2>Customer Reviews</h2>

          <div className="no-reviews-section">
            <p>Be the first to leave a review!</p>

            <div className="google-cta">
              <a
                href="https://www.google.com/search?sca_esv=55a910f019e63594&hl=en-US&sxsrf=AE3TifMecYdjL08xVRBoMi0IP074MbEHtQ:1755120293838&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_gGWZdcKuuc-MnTiv1b9ECNhkEg0g0zpwnEZMPsNgy7f0PIpu_xhKWYFFQii6Q8qSTznhUuT8J-Smrmy3XJZG4de8XO&q=Moxy+Tattoo+Reviews&sa=X&ved=2ahUKEwj135vN3IiPAxVHIzQIHSBdMdsQ0bkNegQIHxAD&biw=1920&bih=969&dpr=1"
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

        {/* Google Reviews Section */}
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
              href="https://www.google.com/search?sca_esv=55a910f019e63594&hl=en-US&sxsrf=AE3TifMecYdjL08xVRBoMi0IP074MbEHtQ:1755120293838&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_gGWZdcKuuc-MnTiv1b9ECNhkEg0g0zpwnEZMPsNgy7f0PIpu_xhKWYFFQii6Q8qSTznhUuT8J-Smrmy3XJZG4de8XO&q=Moxy+Tattoo+Reviews&sa=X&ved=2ahUKEwj135vN3IiPAxVHIzQIHSBdMdsQ0bkNegQIHxAD&biw=1920&bih=969&dpr=1"
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

// Google Reviews Service
const GOOGLE_PLACES_API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID;

export class GoogleReviewsService {
  constructor() {
    // Basic validation
    if (!GOOGLE_PLACES_API_KEY || !PLACE_ID) {
      console.error(
        "Missing required environment variables for Google Reviews API"
      );
    }
  }

  async getReviews(signal) {
    try {
      if (!GOOGLE_PLACES_API_KEY || !PLACE_ID) {
        throw new Error("Missing API key or Place ID");
      }

      // Get place details including reviews
      const isDevelopment = import.meta.env.DEV;
      const apiUrl = isDevelopment
        ? `/api/google-places/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&maxheight=400&key=${GOOGLE_PLACES_API_KEY}`
        : `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&maxheight=400&key=${GOOGLE_PLACES_API_KEY}`;

      const response = await fetch(apiUrl, { signal });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status !== "OK") {
        throw new Error(`Google API error: ${data.status}`);
      }

      return {
        reviews: data.result.reviews || [],
        rating: data.result.rating || 0,
        totalRatings: data.result.user_ratings_total || 0,
      };
    } catch (error) {
      console.error("Error fetching Google reviews:", error);
      throw error;
    }
  }

  formatReviewDate(relativeTimeDescription) {
    const timeMap = {
      "a week ago": "1 week ago",
      "2 weeks ago": "2 weeks ago",
      "3 weeks ago": "3 weeks ago",
      "a month ago": "1 month ago",
      "2 months ago": "2 months ago",
      "3 months ago": "3 months ago",
      "a year ago": "1 year ago",
    };

    return timeMap[relativeTimeDescription] || relativeTimeDescription;
  }

  getStarRating(rating) {
    const fullStars = "★".repeat(Math.floor(rating));
    const hasHalfStar = rating % 1 !== 0;
    const halfStar = hasHalfStar ? "☆" : "";
    const emptyStars = "☆".repeat(5 - Math.ceil(rating));

    return fullStars + halfStar + emptyStars;
  }
}

export default new GoogleReviewsService();

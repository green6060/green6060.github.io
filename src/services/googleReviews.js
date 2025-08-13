// Google Reviews Service
// Note: You'll need to set up Google Cloud Console and get an API key

const GOOGLE_PLACES_API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID; // Your business's Google Place ID

export class GoogleReviewsService {
  constructor() {
    if (!GOOGLE_PLACES_API_KEY) {
      console.warn(
        "Google Places API key not found. Please set VITE_GOOGLE_PLACES_API_KEY in your .env file"
      );
    }
    if (!PLACE_ID) {
      console.warn(
        "Google Place ID not found. Please set VITE_GOOGLE_PLACE_ID in your .env file"
      );
    }
  }

  async getReviews() {
    try {
      if (!GOOGLE_PLACES_API_KEY || !PLACE_ID) {
        throw new Error("Missing API key or Place ID");
      }

      // Get place details including reviews
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`
      );

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
      // Don't return fallback data - let the component handle it
      throw error;
    }
  }

  formatReviewDate(relativeTimeDescription) {
    // Convert relative time to more readable format
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

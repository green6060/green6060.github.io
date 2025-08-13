# Google Reviews API Setup Guide

This guide will help you set up real-time Google Reviews integration for your tattoo studio website.

## 🚀 Quick Setup

### 1. Create a `.env` file in your project root:

```bash
# Google Places API Configuration
VITE_GOOGLE_PLACES_API_KEY=your_google_places_api_key_here
VITE_GOOGLE_PLACE_ID=your_google_place_id_here
```

**Note**: In Vite, environment variables are accessed via `import.meta.env.VITE_*` (not `process.env.*`)

### 2. Get Your Google Places API Key:

1. **Go to [Google Cloud Console](https://console.cloud.google.com/)**
2. **Create a new project** or select existing one
3. **Enable the Places API:**
   - Go to "APIs & Services" > "Library"
   - Search for "Places API"
   - Click "Enable"
4. **Create credentials:**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your API key

### 3. Find Your Google Place ID:

1. **Search for your business on Google Maps**
2. **Look at the URL** - it will contain a `place_id` parameter
3. **Alternative method:** Use [Google's Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)

Example URL: `https://www.google.com/maps/place/Your+Business+Name/@lat,lng,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xPLACE_ID_HERE`

### 4. Set Up Environment Variables:

Replace the placeholder values in your `.env` file:

```bash
VITE_GOOGLE_PLACES_API_KEY=AIzaSyB...your_actual_key
VITE_GOOGLE_PLACE_ID=ChIJN...your_actual_place_id
```

### 5. Restart Your Development Server:

```bash
npm run dev
```

## 🔒 Security Notes

- **Never commit your `.env` file** to version control
- **Restrict your API key** to only the Places API and your domain
- **Set up billing alerts** in Google Cloud Console to monitor usage

## 🎯 Features

Once configured, your website will:

- ✅ **Display real-time Google Reviews**
- ✅ **Show overall rating and total review count**
- ✅ **Handle loading states gracefully**
- ✅ **Fall back to placeholder content if API fails**
- ✅ **Automatically format review dates and ratings**

## 🐛 Troubleshooting

### Common Issues:

1. **"Missing API key or Place ID"**

   - Check your `.env` file exists and has correct values
   - Restart your development server

2. **"Google API error: REQUEST_DENIED"**

   - Verify your API key is correct
   - Ensure Places API is enabled
   - Check if billing is set up

3. **"Google API error: NOT_FOUND"**

   - Verify your Place ID is correct
   - Ensure the business exists on Google Maps

4. **CORS errors in browser**
   - This is normal for development
   - The API works server-side, so it won't affect production

## 💰 Pricing

- **Google Places API**: Free tier includes 1,000 requests/month
- **Typical usage**: ~100-500 requests/month for a business website
- **Cost**: Usually $0 for small businesses

## 🔄 Updating Reviews

Reviews update automatically when:

- New reviews are posted to Google
- Your website refreshes or users visit
- The component re-renders

No manual updates needed!

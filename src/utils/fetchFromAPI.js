import axios from "axios";

export const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const fetchFromAPI = async (url) => {
  const cacheKey = `youtube-cache-${url}`;

  // Check cache first
  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  try {
    const { data } = await axios.get(
      `${BASE_URL}/${url}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    );

    // Save response in cache
    localStorage.setItem(cacheKey, JSON.stringify(data));

    return data;
  } catch (error) {
    console.error("API Error:", error);

    return {
      items: [],
    };
  }
};

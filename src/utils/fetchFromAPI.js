import axios from "axios";

export const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/${url}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );

    return data;
  } catch (error) {
    console.error("API Error:", error);

    return {
      items: [],
    };
  }
};

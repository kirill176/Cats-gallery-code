import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const fetchBreeds = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/breeds`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      params: {
        limit: 30,
      },
    });
    return data;
  } catch (error) {
    throw new Error("");
  }
};

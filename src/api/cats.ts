import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export async function fetchCats(limit: number = 28, breed_ids: string = "") {
  try {
    const { data } = await axios.get(`${baseURL}/images/search`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      params: {
        limit: limit,
        has_breeds: 1,
        order: "ASC",
        breed_ids: breed_ids,
      },
    });

    return data;
  } catch (error) {
    throw new Error("");
  }
}

export const getCat = async (id: string) => {
  try {
    const { data } = await axios.get(`${baseURL}/images/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
    });

    return data;
  } catch (error) {
    throw new Error("");
  }
};

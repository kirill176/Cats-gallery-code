import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const postFavouriteCat = async (id: string) => {
  try {
    const { data } = await axios.post(
      `${baseURL}/favourites`,
      {
        image_id: id,
        sub_id: "user",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
      }
    );
    return data;
  } catch (error) {
    throw new Error("");
  }
};

export const getFavouriteCat = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/favourites`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
    });

    return data;
  } catch (error) {
    throw new Error("Failed to fetch favourite cats");
  }
};

export const deleteFavouriteCat = async (id: string) => {
  try {
    const { data } = await axios.delete(`${baseURL}/favourites/${id}`, {
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

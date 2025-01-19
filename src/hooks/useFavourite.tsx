import { useState } from "react";
import { deleteFavouriteCat, postFavouriteCat } from "../api/favouriteCats";

export const useFavourite = () => {
  const [favCats, setFavCats] = useState(
    JSON.parse(localStorage.getItem("FavouriteIds") || "{}")
  );

  const handleClickFavourite = async (catID: string) => {
    const existingIds = JSON.parse(
      localStorage.getItem("FavouriteIds") || "{}"
    );

    if (Object.values(existingIds).includes(catID)) {
      const fav_id = Object.keys(existingIds).find(
        (key) => existingIds[key] === catID
      );
      if (fav_id) {
        delete existingIds[fav_id];
        await deleteFavouriteCat(fav_id);
      }
    } else {
      const { id: fav_id } = await postFavouriteCat(catID);
      existingIds[fav_id] = catID;
    }

    setFavCats(existingIds);
    localStorage.setItem("FavouriteIds", JSON.stringify(existingIds));
  };

  return { favCats, handleClickFavourite };
};

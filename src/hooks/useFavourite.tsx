import { useState } from "react";
import { catResponse } from "../types/catsType";

export const useFavourite = () => {
  const [favCats, setFavCats] = useState(
    JSON.parse(localStorage.getItem("favourites") || "[]")
  );

  const handleClickFavourite = (cat: catResponse) => {
    let existingCats = JSON.parse(localStorage.getItem("favourites") || "[]");

    const isEcisting = existingCats.some((c: catResponse) => c.id === cat.id);

    if (isEcisting) {
      existingCats = existingCats.filter((c: catResponse) => c.id !== cat.id);
    } else {
      existingCats.push(cat);
    }

    setFavCats(existingCats);
    localStorage.setItem("favourites", JSON.stringify(existingCats));
  };

  return { favCats, handleClickFavourite };
};

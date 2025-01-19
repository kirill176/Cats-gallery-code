import { FC } from "react";
import { catResponse } from "../../types/catsType";
import { Link } from "react-router-dom";
import { useFavourite } from "../../hooks/useFavourite";

interface propsType {
  cat: catResponse;
}

const CatBox: FC<propsType> = ({ cat }) => {
  const { favCats, handleClickFavourite } = useFavourite();

  return (
    <div className="rounded-md w-full overflow-hidden relative bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={cat.url}
          alt=""
          loading="lazy"
        />
        <button
          className="absolute right-2 bottom-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100 transition duration-300"
          onClick={() => handleClickFavourite(cat.id)}
        >
          <img
            src={
              Object.values(favCats).includes(cat.id)
                ? "images/favourite.ico"
                : "images/star.ico"
            }
            alt="Favourite Icon"
            className="w-5 h-5"
          />
        </button>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-700">
          <span className="font-medium">Breed:</span>{" "}
          {cat.breeds.map((breed) => breed.name).join(", ")}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-medium">Country:</span>{" "}
          {cat.breeds.map((breed) => breed.origin).join(", ")}
        </p>
        <Link
          className="text-blue-600 hover:underline mt-2 inline-block"
          to={`/cat/${cat.id}`}
        >
          More information
        </Link>
      </div>
    </div>
  );
};

export default CatBox;

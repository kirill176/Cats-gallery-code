import { FC } from "react";
import { catResponse } from "../types/catsType";
import { useNavigate } from "react-router-dom";
import star from "../../public/images/star.ico";
import favourite from "../../public/images/favourite.ico";
import { useFavourite } from "../hooks/useFavourite";
import { buttonClassNames } from "../constants/constants";

interface propsType {
  cat: catResponse;
}

const CatBox: FC<propsType> = ({ cat }) => {
  const { favCats, handleClickFavourite } = useFavourite();
  const navigate = useNavigate();

  const handleClickMore = () => {
    navigate(`/cat/${cat.id}`);
  };

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
          onClick={() => handleClickFavourite(cat)}
        >
          <img
            src={
              favCats.some((favCat: catResponse) => favCat.id === cat.id)
                ? favourite
                : star
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
        <button
          onClick={handleClickMore}
          className={`px-3 py-1 my-2 ${buttonClassNames}`}
        >
          More information
        </button>
      </div>
    </div>
  );
};

export default CatBox;

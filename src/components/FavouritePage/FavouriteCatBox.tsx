import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { favCats } from "../../types/catsType";

interface FavouriteCatProps {
  cat: favCats;
  handleClickFavourite: (param: string) => void;
}

const FavouriteCatBox: FC<FavouriteCatProps> = ({
  cat,
  handleClickFavourite,
}) => {
  const navigate = useNavigate();

  const handleClickDetails = (id: string) => {
    navigate(`/cat/${id}`);
  };

  return (
    <div className="relative overflow-hidden group">
      <img
        className="w-full h-full object-cover transition duration-300 ease-in-out"
        src={cat.image.url}
        alt=""
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => handleClickDetails(cat.image.id)}
          className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
        >
          Details
        </button>
        <button
          onClick={() => handleClickFavourite(cat.image.id)}
          className="px-4 py-2 bg-red-400 text-white rounded-full shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FavouriteCatBox;

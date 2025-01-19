import { catResponse } from "../types/catsType";
import { useFavourite } from "../hooks/useFavourite";
import CatBox from "../components/CatBox";

const FavouritesPage = () => {
  const { favCats } = useFavourite();

  if (favCats.length == 0) {
    return (
      <div className="text-center text-xl">
        <p>There are no favorite cats</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full my-8">
      {favCats.map((cat: catResponse) => (
        <CatBox key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default FavouritesPage;

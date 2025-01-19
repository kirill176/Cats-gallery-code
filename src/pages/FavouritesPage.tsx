import { useQuery } from "@tanstack/react-query";
import { getFavouriteCat } from "../api/favouriteCats";
import Error from "../components/Error";
import FavouriteCatBox from "../components/FavouritePage/FavouriteCatBox";
import Loading from "../components/Loading";
import { favCats } from "../types/catsType";
import { useFavourite } from "../hooks/useFavourite";

const FavouritesPage = () => {
  const { favCats, handleClickFavourite } = useFavourite();
  const { data, isLoading, error } = useQuery({
    queryKey: [`favCat`, favCats],
    queryFn: getFavouriteCat,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    <Error error={error} />;
  }

  if (data.length == 0) {
    return (
      <div className="text-center text-xl">
        <p>There are no favorite cats</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full my-8">
      {data.map((cat: favCats) => (
        <FavouriteCatBox
          key={cat.id}
          cat={cat}
          handleClickFavourite={handleClickFavourite}
        />
      ))}
    </div>
  );
};

export default FavouritesPage;

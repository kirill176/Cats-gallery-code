import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useOptionContext } from "../../contexts/OptionContext";
import { fetchCats } from "../../api/cats";
import Loading from "../Loading";
import Error from "../Error";
import CatBox from "./CatBox";
import { catResponse } from "../../types/catsType";

const CatsMasonryLayout = () => {
  const { selectedOptions } = useOptionContext();
  const [limit, setLimit] = useState(28);
  const { data, isLoading, error } = useQuery({
    queryKey: [`cats${limit}`, selectedOptions],
    queryFn: () => fetchCats(limit, selectedOptions.join(",")),
  });

  const handleLoadingMore = () => {
    if (limit > 100) {
      setLimit(100);
    } else {
      setLimit(limit + 28);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 my-8">
        {data.map((cat: catResponse) => (
          <CatBox key={cat.id} cat={cat} />
        ))}
      </div>

      {data.length === limit && data.length < 100 && (
        <div className="flex justify-center mb-5">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            onClick={handleLoadingMore}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default CatsMasonryLayout;

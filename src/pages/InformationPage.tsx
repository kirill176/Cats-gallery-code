import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getCat } from "../api/cats";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { buttonClassNames } from "../constants/constants";

const InformationPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: [`cat${id}`],
    queryFn: () => (id ? getCat(id) : Promise.reject("No ID provided")),
    enabled: !!id,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(-1);
  };

  const { name, origin, life_span, temperament, description, vetstreet_url } =
    data.breeds[0] || {};

  return (
    <div>
      <button
        onClick={handleBackClick}
        className={`px-4 py-2 ${buttonClassNames}`}
      >
        {"<- return back"}
      </button>
      <div className="flex flex-col gap-12 md:flex-row md:gap-4 my-8">
        <div className="w-full md:w-1/2 rounded-md overflow-hidden">
          <img className="w-full h-full object-cover" src={data.url} alt="" />
        </div>
        <div className="text-xl">
          <p>
            <strong>Breed:</strong> {name}
          </p>
          <p>
            <strong>Country:</strong> {origin}
          </p>
          <p>
            <strong>Life Span:</strong> {life_span} years
          </p>
          <p>
            <strong>Temperament:</strong> {temperament}
          </p>
          <a
            className="text-color-blue hover:underline"
            href={vetstreet_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            VetSTREET information
          </a>
        </div>
      </div>
      <div className="mb-4">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InformationPage;

import { FC } from "react";

interface ErrorProps {
  error: Error;
}

const Error: FC<ErrorProps> = ({ error }) => {
  console.log(error);

  return (
    <div className="text-center text-xl">
      <p>Error loading data: {error.message}</p>
    </div>
  );
};

export default Error;

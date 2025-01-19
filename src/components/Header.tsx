import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full mb-5">
      <div className="w-full max-w-screen-lg px-4 py-2 m-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex gap-3 items-center mb-4 sm:mb-0">
          <div className="w-10">
            <img className="w-full" src="/favicon.ico" alt="Logo" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-color-blue">
            Cat Gallery
          </h1>
        </div>
        <div className="flex gap-4 text-color-blue">
          <Link className="hover:underline" to="/">
            Home
          </Link>
          <Link className="hover:underline" to="/favourite">
            Favourite
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

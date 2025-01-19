import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import FavouritesPage from "./pages/FavouritesPage";
import InformationPage from "./pages/InformationPage";
import { OptionProvider } from "./contexts/OptionContext";

function App() {
  return (
    <OptionProvider>
      <Header />
      <div className="w-3/5 m-auto">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favourite" element={<FavouritesPage />} />
          <Route path="/cat/:id" element={<InformationPage />} />
        </Routes>
      </div>
    </OptionProvider>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Components/MainPage";
import ShowArtPage from "./Components/ShowArtPage";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/:id" element={<ShowArtPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

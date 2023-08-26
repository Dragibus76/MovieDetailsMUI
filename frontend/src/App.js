import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MediaPage from './pages/MediaPage/MediaPage';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home/Home";
import MediaDetailsPage from "./pages/MediaDetailsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType" element={<MediaPage />} />
          <Route path="/:mediaType/:mediaId" element={<MediaDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

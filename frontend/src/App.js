import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MediaPage from './pages/MediaPage/MediaPage';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType" element={<MediaPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

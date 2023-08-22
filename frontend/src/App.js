import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home';
import Movie from "./pages/Movie/Movie";
import Tv from './pages/Tv/Tv';
import './App.css';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/films" element={<Movie/>}/>
    <Route path="/series" element={<Tv/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;

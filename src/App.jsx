import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Category from "./screens/Category";
import NotFound from "./screens/NotFound";
import NavBar from "./components/NavBar";
import Location from "./screens/Locations";
import Searchs from "./screens/Searchs";
import Detail from "./screens/Detail";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categorys/:status" element={<Category/>}/>
        <Route path="/locations" element={<Location/>}/>
        <Route path="/searchs/:query" element={<Searchs/>}/>
        <Route path="/detail/:characterId" element={<Detail/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

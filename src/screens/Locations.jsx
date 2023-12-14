import { useEffect, useState } from "react";
import Card from "../components/Card";
import CardLocation from "../components/CardLocation";

function Locations() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);
  return (
    <div className="flex flex-wrap gap-6">
      {characters.length > 0 ? (
        characters.map(location => 
          <CardLocation key={location.id} name={location.name} type={location.type} dimension={location.dimension}/>
      )) : 
      <span className="loading loading-spinner loading-lg text-white"></span>
      }
    </div>
  );
}
export default Locations;
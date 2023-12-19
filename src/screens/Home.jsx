import { useEffect, useState } from "react";
import Card from "../components/Card";

function Home() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())  
      .then((data) => setCharacters(data.results));
  }, []);
  return (
    <div className="flex flex-wrap gap-6  mt-20">
      {characters.length > 0 ? (
        characters.map(character => 
          <Card key={character.id} id={character.id} name={character.name} species={character.species} location={character.location.name} status={character.status} imageUrl={character.image}/>
      )) : 
      <span className="loading loading-spinner loading-lg text-white"></span>
      }
    </div>
  );
}
export default Home;

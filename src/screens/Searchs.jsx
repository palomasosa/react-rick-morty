import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

function Searchs() {
    const {query} = useParams();
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);
  return (
    <div className="flex flex-wrap gap-6">
      {characters.length > 0 ? (
        characters.map(character => 
          <Card key={character.id} name={character.name} species={character.species} location={character.location.name} status={character.status} imageUrl={character.image}/>
      )) : 
      <span className="loading loading-spinner loading-lg text-white"></span>
      }
    </div>
  );
}
export default Searchs;
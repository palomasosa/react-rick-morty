import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom"

function Home() {
  const {status} = useParams();
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?status=${status}`)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
    }, [status]);
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
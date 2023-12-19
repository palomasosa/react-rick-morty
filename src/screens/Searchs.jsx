import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

function Searchs() {
    const {query} = useParams();
  const [characters, setCharacters] = useState([]);
  const[error,setError] = useState(null);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then((res) => {
        if (!res.ok) {
            throw new Error('La búsqueda no ha devuelto resultados');
        }
        return res.json();
     })
      .then((data) => setCharacters(data.results))
      .catch((err)=>setError(err))
  }, [query]);
  return (
    <div className="flex flex-wrap gap-6  mt-20">
      {error ? <p className="text-white">Ha ocurrido un error: {error.message}</p> : characters != null && characters.length > 0 ? (
        characters.map(character => 
          <Card key={character.id} id={character.id} name={character.name} species={character.species} location={character.location.name} status={character.status} imageUrl={character.image}/>
      )) : 
      <span className="loading loading-spinner loading-lg text-white"></span>
      }
    </div>
  );
}
export default Searchs;
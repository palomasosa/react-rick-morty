import { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { characterId } = useParams();
  const [character, setCharacter] = useState();
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((res) => res.json())  
      .then((data) => setCharacter(data));
  }, [characterId]);
  return (
    <>
    {character != null ? 
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
           src={`${character.image}`}
          alt="image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{character.name}</h2>
        <p className="text-start">Status: {character.status}</p>
        <p className="text-start">Species: {character.species}</p>
        <p className="text-start">Gender: {character.gender}</p>
        <p className="text-start">Location: {character.location.name}</p>
        <p className="text-start">Episodes: {character.episode.length}</p>
        <p className="text-start">Created: {character.created.substring(0, 10)}</p>
      </div>
    </div> : <span className="loading loading-spinner loading-lg text-white"></span>
    }
    </>
  );
}
export default Detail;

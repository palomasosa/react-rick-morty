import { useEffect, useState , useContext} from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../context/FavoriteContext";

function Card({id, name, species, location, status, imageUrl }) {

  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoriteContext);
  const fav = isFavorite(id);

  const handleFavs = ()=>{
    fav ? removeFavorite(id) : addFavorite({id,name,species,location,status,imageUrl});
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={`${imageUrl}`} alt="character" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Especie: {species}</p>
        <p>Locación: {location}</p>
        <p>Estado: {status}</p>
        <div >
          <button className="btn btn-outline btn-primary"><Link to={`/detail/${id}`}>Detalles</Link></button>
          <button className="btn btn-primary ml-2.5" onClick={handleFavs}>{fav ? "🧡" : "🤍"}</button>
        </div>
      </div>
    </div>
  );
}
export default Card;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card({id, name, species, location, status, imageUrl }) {

  const [fav,setFav] = useState(false);
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
          <button className="btn btn-primary ml-2.5" onClick={()=>{setFav(!fav)}}>{fav ? "🤍" : "🧡"}</button>
        </div>
      </div>
    </div>
  );
}
export default Card;

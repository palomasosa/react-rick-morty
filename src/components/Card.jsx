function Card({ name, species, location, status, imageUrl }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-20">
      <figure className="px-10 pt-10">
        <img src={`${imageUrl}`} alt="character" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Nombre: {name}</h2>
        <p>Especie: {species}</p>
        <p>Locación: {location}</p>
        <p>Estado: {status}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Agregar a favoritos</button>
        </div>
      </div>
    </div>
  );
}
export default Card;

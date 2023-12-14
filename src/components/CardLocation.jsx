function CardLocation({ name, type, dimension }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-20">
      <div className="card-body">
        <h2 className="card-title">Nombre: {name}</h2>
        <p>Tipo: {type}</p>
        <p>Dimension: {dimension}</p>
      </div>
    </div>
  );
}
export default CardLocation;

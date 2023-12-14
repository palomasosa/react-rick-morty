
import { Link } from "react-router-dom"

function Busqueda() {
    name = "rick";
    return(
        <div>
            <input type="text" placeholder="Búsqueda..."/>
            <Link to={`/searchs/${name}`}>Buscar</Link>
        </div>
    )
}
export default Busqueda
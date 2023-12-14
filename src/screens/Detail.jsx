import { useParams } from "react-router-dom"
function Detail() {
    const {idProducto} = useParams();
    console.log(idProducto)
    return(
        <h2>Detalle {idProducto}</h2>
    )
}
export default Detail
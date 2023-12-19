
import { useRef } from "react";
import { useNavigate } from "react-router-dom"

function Searcher() {
    const navigate = useNavigate();
    const input = useRef(null);
    const handleSearch = ()=> input.current.value != "" ? navigate(`/searchs/${input.current.value}`) : navigate('/')
    
    return(
        <div>
            <div className="join">
            <input className="input input-bordered join-item" placeholder="Búsqueda..." ref={input}/>
            <button className="btn join-item rounded-r-full" style={{backgroundColor:"#f8f5ff"}} onClick={handleSearch}>Buscar</button>
            </div>
        </div>
    )
}
export default Searcher
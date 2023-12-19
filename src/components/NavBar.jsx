import { Link } from "react-router-dom"
import Searcher from "./Searcher"

function NavBar() {
    return(
        <nav> 
            <ul className="flex justify-evenly fixed bg-indigo-200 top-0 w-full left-0 h-20 items-center z-10">
                <li><Link to={'/'} className="text-black"><img src="src\assets\rickandmortytitle.png" width={200} height={200}/></Link></li>
                <li>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1 bg-white">Categorías</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/categorys/alive'} className="text-black">Alive</Link></li>
                            <li><Link to={'/categorys/dead'} className="text-black">Dead</Link></li>
                            <li><Link to={'/categorys/unknown'} className="text-black">Unknown</Link></li>
                        </ul>
                    </div>
                </li>
                <li><Link to={'/locations'} className="text-black">Locaciones</Link></li>
                <li><Link to={'/favorites'} className="text-black">Favoritos</Link></li>
                <Searcher/>
            </ul>
        </nav>
    )
}
export default NavBar
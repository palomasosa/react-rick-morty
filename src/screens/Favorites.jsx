import { useContext } from "react";
import FavoriteContext from "../context/FavoriteContext";
import Card from "../components/Card";

function Favorites() {
    const {favs} = useContext(FavoriteContext);
    return(
        <div className="flex flex-wrap gap-6 mt-20">
            {favs.length > 0 && favs != null ? (
                favs.map(character =>
                    <Card 
                        key={character.id} 
                        id={character.id} 
                        name={character.name} 
                        species={character.species} 
                        location={character.location} 
                        status={character.status} 
                        imageUrl={character.imageUrl}
                    />
                    )
            ) : 
            <span className="text-white">No agregaste favoritos :(</span>
        }
        </div>
    );
}
export default Favorites;
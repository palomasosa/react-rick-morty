import React, { useState } from "react";

const FavoriteContext = React.createContext({
    favs: [],
    addFavorite: ()=>{},
    removeFavorite: ()=>{},
    isFavorite: ()=>{},
});

export function FavoritesProvider({children}){
    const [favs,setFavs] = useState([]);

    const addFavorite = (character) => { //setState tiene un parametro previo que trae la última versión actualizada
        setFavs((prevFavorites)=>[...prevFavorites,character]);
    };
    const removeFavorite = (characterId) => {
        setFavs((prevFavorites)=> prevFavorites.filter((character)=>character.id !== characterId));
    };
    const isFavorite = (characterId)=>{
        return favs.some((character) => character.id === characterId);
    };
    return(
        <FavoriteContext.Provider value={{favs,addFavorite,removeFavorite,isFavorite}}>
            {children}
        </FavoriteContext.Provider>
    );
}
export default FavoriteContext;
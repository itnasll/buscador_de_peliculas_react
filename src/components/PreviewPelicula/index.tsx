import React, { useState, useEffect } from "react"
import { ItemPelicula } from "../../models";

interface PreviewPeliculaProps {
    pelicula: ItemPelicula
    
}
 
interface PeliculasFavoritas {
  [imdbId: string]: boolean
}

const PreviewPelicula: React.FunctionComponent<PreviewPeliculaProps> = (props) => {
    // ---------- Use State ----------
    const [soyFavorito, setsoyFavorito] = useState<boolean>(() => {
      const peliculas: PeliculasFavoritas = JSON.parse(localStorage.getItem('favoritos') || '{}')
      return (peliculas != null && peliculas[props.pelicula.imdbID] ? true: false)
    })
    
    // ---------- Callbacks ----------
    const onClickButton = ()=>{
        setsoyFavorito(!soyFavorito)

        const peliculas: PeliculasFavoritas = JSON.parse(localStorage.getItem('favoritos') || '{}')
        peliculas[props.pelicula.imdbID] =  !soyFavorito
        localStorage.setItem('favoritos', JSON.stringify(peliculas)) 
    }
     return (
        <div>
            {props.pelicula.title}
            <img src={props.pelicula.poster} alt={props.pelicula.title}/>
            <button onClick={onClickButton}>{soyFavorito ?"Me Gusta":"Agregame a favorito"}</button>
        </div> );
}
 
 


export default PreviewPelicula;
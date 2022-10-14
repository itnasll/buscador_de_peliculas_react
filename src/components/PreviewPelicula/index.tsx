import React, { useState, useEffect } from "react"
import { ItemPelicula } from "../../models";

interface PreviewPeliculaProps {
    pelicula: ItemPelicula;
    onSelectPelicula?: (peliculaId?: string) => void 
    
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
    const onSelectPelicula = (peliculaId: string)=>{
      if(props.onSelectPelicula){
        props.onSelectPelicula(peliculaId)
      }
    }
     return (
        <div>
            {props.pelicula.title}
            <img onClick={()=>onSelectPelicula(props.pelicula.imdbID)}  src={props.pelicula.poster} alt={props.pelicula.title}/>
            <button onClick={onClickButton}>{soyFavorito ?"Me Gusta":"Agregame a favorito"}</button>
        </div> );
}
 
 


export default PreviewPelicula;
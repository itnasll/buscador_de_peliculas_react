import React from "react"
import { ItemPelicula } from "../../models";

interface PreviewPeliculaProps {
    pelicula: ItemPelicula
    
}
 
const PreviewPelicula: React.FunctionComponent<PreviewPeliculaProps> = (props) => {
    return ( <div>{props.pelicula.title}<img src={props.pelicula.poster} alt={props.pelicula.title}/></div> );
}
 
export default PreviewPelicula;
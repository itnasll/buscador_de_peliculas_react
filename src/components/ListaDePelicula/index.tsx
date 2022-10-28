import React from "react"
import { ItemPelicula } from "../../models";
import PreviewPelicula from "../PreviewPelicula";

interface ListaDePeliculasProps {
    peliculas: ItemPelicula[];
    onSelectPelicula?: (peliculaId?: string) => void 
}
 
const ListaDePeliculas: React.FunctionComponent<ListaDePeliculasProps> = (props) => {
    return ( <div>ListadePeliculas
        <br />
        {props.peliculas.map(pelicula => {
            return <PreviewPelicula pelicula={pelicula}key={pelicula.imdbID} onSelectPelicula={props.onSelectPelicula}/>
        })}
    </div> );
}
 
export default ListaDePeliculas;


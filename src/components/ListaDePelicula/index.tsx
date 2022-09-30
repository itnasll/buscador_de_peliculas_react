import React from "react"
import { ItemPelicula } from "../../models";
import PreviewPelicula from "../PreviewPelicula";

interface ListaDePeliculasProps {
    peliculas: ItemPelicula[]
}
 
const ListaDePeliculas: React.FunctionComponent<ListaDePeliculasProps> = (props) => {
    return ( <div>ListadePeliculas
        <br />
        {props.peliculas.map(pelicula => {
            return <PreviewPelicula pelicula={pelicula}key={pelicula.imdbID} />
        })}
    </div> );
}
 
export default ListaDePeliculas;


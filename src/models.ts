export function resutadoBusquedaAItemPelicula(obj: ItemPeliculaBusqueda):ItemPelicula{
    return{
        title: obj["Title"],
        poster:obj["Poster"],
        year:obj["Year"],
        type:obj["Type"],
        imdbID:obj["imdbID"]
    }
}
export interface ItemPelicula{
    "title":string ,
            "year":string,
            "imdbID": string,
            "type": string,
            "poster": string
}
interface ItemPeliculaBusqueda{
    "Title":string ,
            "Year":string,
            "imdbID": string,
            "Type": string,
            "Poster": string
}

import React, { useEffect, useState } from "react"
import Buscador from "../../components/Buscador";
import ListaDePeliculas from "../../components/ListaDePelicula";
import { ItemPelicula, resutadoBusquedaAItemPelicula } from "../../models";

interface HomeViewProps {
    onSelectPelicula?: (peliculaId?: string) => void 
}
 
const HomeView: React.FunctionComponent<HomeViewProps> = (props) => {
    const [peliculas, setpeliculas] = useState<ItemPelicula[]>([])
    const [busqueda, setbusqueda] = useState<string>("")

    useEffect(() => {
      if(busqueda){
        fetch( `https://www.omdbapi.com/?apikey=e588094d&type=movie&s=${encodeURIComponent(busqueda)}`)
            .then(val=>val.json())
            .then(val2=>{
            if(val2["Search"] != null){
                const listaPeliculas = val2["Search"].map(resutadoBusquedaAItemPelicula)
                setpeliculas(listaPeliculas)
            }
        })
      }else{
        setpeliculas([])
      }
      
    
      
    }, [busqueda,setpeliculas])
    
   

    const onSearchCallback=(query: string )=>{
        setbusqueda(query)

       
    }
    
    return (<div>ComponenteHome 
        <br />
        <Buscador onSearch={onSearchCallback}/>
        <br />
        <ListaDePeliculas peliculas={peliculas} onSelectPelicula={props.onSelectPelicula}/>
    </div>);
}
 
export default HomeView;
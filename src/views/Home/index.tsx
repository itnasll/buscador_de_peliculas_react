import React from "react"
import Buscador from "../../components/Buscador";
import ListaDePeliculas from "../../components/ListaDePelicula";

interface HomeViewProps {
    
}
 
const HomeView: React.FunctionComponent<HomeViewProps> = (props) => {
    return (<div>ComponenteHome 
        <br />
        <Buscador onSearch={(val)=>{
            console.log(val)
        }}/>
        <br />
        <ListaDePeliculas/>
    </div>);
}
 
export default HomeView;
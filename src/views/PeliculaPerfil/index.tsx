import React, { useEffect, useState } from "react";

interface PeliculaPerfilProps {
    peliculaId: string;
    onReturnHome?: ()=> void
}
 
const PeliculaPerfil: React.FC<PeliculaPerfilProps> = (props: PeliculaPerfilProps) => {
    const [pelicula, setpelicula] = useState<string | undefined>(undefined)
    const onClickButton = ()=>{
        if(props.onReturnHome){
            props.onReturnHome()
        }
    }
    useEffect(() => {
        fetch( `https://www.omdbapi.com/?apikey=e588094d&i=${encodeURIComponent(props.peliculaId)}`)
        .then(val=>val.json())
        .then((pel:object) =>setpelicula(JSON.stringify(pel)))
    
      
    }, [])
    
    return ( <div><div>PerfilPelicula</div><button onClick={onClickButton}>Volver a Home</button>
    <div>{pelicula || '' }</div>
    </div> );

}


 
export default PeliculaPerfil;
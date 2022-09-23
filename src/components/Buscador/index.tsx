import React, { useEffect, useState } from "react"
import useDebounce from "../../hooks/useDebounce"


interface BuscadorProps {
    onSearch:(value:string) => void,
   

}

 
const Buscador: React.FunctionComponent<BuscadorProps> = (props) => {
    const [value, setvalue] = useState<string | undefined>(undefined)

    const debounceValue = useDebounce<string | undefined>(value, 500)

    useEffect(() => {
      if(debounceValue){
        props.onSearch(debounceValue)
      }
          }
    , [debounceValue, props])
    

    const onChange = (event:React.ChangeEvent<HTMLInputElement> | undefined) => {
        if(!event){
           setvalue("")
            return


        }
        setvalue(event.target.value)
    }
    //usar UseDebounce para el buscador
    return ( <div><input type="text" onChange={onChange} /></div> );
}
 
export default Buscador;
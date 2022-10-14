import React, { useState } from 'react';
import './App.css';
import HomeView from './views/Home';
import PeliculaPerfil from './views/PeliculaPerfil';

function App() {
    const [peliculaSeleccionada, setPeliculaSeleccionada] = useState<string | undefined>(undefined)

  const reiniciarPelicula = ()=>{
    setPeliculaSeleccionada(undefined)
  } 
  return (

    <div className="App">
      <div>Mi Aplicacion</div>
      {peliculaSeleccionada ? 
      <PeliculaPerfil peliculaId={peliculaSeleccionada} onReturnHome={reiniciarPelicula}/> :
      <HomeView onSelectPelicula={setPeliculaSeleccionada}/>  }
    
    </div>

  );
}

export default App;

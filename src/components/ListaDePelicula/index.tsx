import React from "react"
import { ItemPelicula } from "../../models";
import PreviewPelicula from "../PreviewPelicula";

interface ListaDePeliculasProps {
    
}
 
const ListaDePeliculas: React.FunctionComponent<ListaDePeliculasProps> = (props) => {
    return ( <div>ListadePeliculas
        <br />
        {peliculaEjemplo.map(pelicula => {
            return <PreviewPelicula pelicula={pelicula}/>
        })}
    </div> );
}
 
export default ListaDePeliculas;


const peliculaEjemplo: ItemPelicula[] = [
        {
            "title": "Dunkirk",
            "year": "2017",
            "imdbID": "tt5013056",
            "type": "movie",
            "poster": "https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"
        },
        {
            "title": "Operation Dunkirk",
            "year": "2017",
            "imdbID": "tt6836772",
            "type": "movie",
            "poster": "https://m.media-amazon.com/images/M/MV5BOGUxMDZjYTgtM2Q0MS00ZTRiLThkYzktNDQ3ZGMzMjY0ZjIyXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg"
        },
        {
            "title": "Behind the Line: Escape to Dunkirk",
            "year": "2020",
            "imdbID": "tt10148118",
            "type": "movie",
            "poster": "https://m.media-amazon.com/images/M/MV5BNjA5ODExZTktMjA4MS00ZmJhLWE5MzMtOGMxNjQzZDI3YTNlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
            "title": "Dunkirk",
            "year": "1958",
            "imdbID": "tt0051565",
            "type": "movie",
            "poster": "https://m.media-amazon.com/images/M/MV5BZjJlNmUxNGYtMjg2MC00NjBiLTg3MWQtNGFjMmRkYjM0M2E4XkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg"
        },
        {
            "title": "The Dunkirk Spirit: Behind the Making of the Movie",
            "year": "2018",
            "imdbID": "tt8000432",
            "type": "movie",
            "poster": "https://m.media-amazon.com/images/M/MV5BZDAyNGViM2YtY2JjMy00NmNmLWFkZjItMmI2NDVhOGExYmM5XkEyXkFqcGdeQXVyNjExMjE5OTM@._V1_SX300.jpg"
        },
        {
            "title": "Weekend at Dunkirk",
            "year": "1964",
            "imdbID": "tt0058740",
            "type": "movie",
            "poster": "https://m.media-amazon.com/images/M/MV5BMGM2ZTk2OGItYTg0Ny00NzVkLTk1ZTUtYmViYTRkYWI0MWIyXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_SX300.jpg"
        },
        {
            "title": "Dunkirk",
            "year": "2004–",
            "imdbID": "tt0400391",
            "type": "series",
            "poster": "https://m.media-amazon.com/images/M/MV5BMmE0ZmUzYzUtMzE5Ni00OGM4LWJhMjEtOWZmYWQwYzA5NDM5XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SX300.jpg"
        },
        {
            "title": "Battle of Dunkirk: From Disaster to Triumph",
            "year": "2018",
            "imdbID": "tt8015984",
            "type": "movie",
            "poster": "https://m.media-amazon.com/images/M/MV5BZGQwNDQ1ZjQtM2NlNS00YjQxLWJhNmYtMTA3YmI0NWM1MWRhXkEyXkFqcGdeQXVyMTE4NTI5NTA@._V1_SX300.jpg"
        },
        {
            "title": "The Making of Dunkirk",
            "year": "2017",
            "imdbID": "tt7730784",
            "type": "movie",
            "poster": "https://m.media-amazon.com/images/M/MV5BNTA0M2RlNGMtODYyYy00YWI1LWFmZjQtOTYyNDFlNTFmYjAzXkEyXkFqcGdeQXVyODAyNDE3Mw@@._V1_SX300.jpg"
        },
        {
            "title": "Dunkirk: The Soldiers' Story",
            "year": "2004",
            "imdbID": "tt0437167",
            "type": "movie",
            "poster": "https://m.media-amazon.com/images/M/MV5BYTUzNjNiZDgtYjFmMC00MDIyLWFkMjAtZmZkYzU3MWZjZjFlXkEyXkFqcGdeQXVyMDc1Njk5MA@@._V1_SX300.jpg"
        }
    ]


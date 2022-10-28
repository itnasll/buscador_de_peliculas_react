import React, { useEffect, useState } from "react";

interface PeliculaPerfilProps {
  peliculaId: string;
  onReturnHome?: () => void;
}

interface Ranking {
  source: string;
  value: string;
}

interface PeliculaCompleta {
  title: string;
  imdbID: string;
  duration: string;
  year: string;
  rated: string;
  plot: string;
  actors: string[];
  genre: string[];
  director: string[];
  writers: string[];
  poster: string;
  rankings: Ranking[];
}

const objToPeliculaCompleta = (obj: any): PeliculaCompleta => {
  return {
    title: obj["Title"],
    actors: obj["Actors"].split(", "),
    director: obj["Director"].split(", "),
    duration: obj["Runtime"],
    genre: obj["Genre"].split(", "),
    imdbID: obj["imdbID"],
    plot: obj["Plot"],
    poster: obj["Poster"],
    rankings: obj["Ratings"].map((ran: any) => ({
      source: ran["Source"],
      value: ran["Value"],
    })),
    rated: obj["Rated"],
    writers: obj["Writer"].split(", "),
    year: obj["Year"],
  };
};

const PeliculaPerfil: React.FC<PeliculaPerfilProps> = (
  props: PeliculaPerfilProps
) => {
  const [pelicula, setpelicula] = useState<PeliculaCompleta | undefined>(
    undefined
  );
  const onClickButton = () => {
    if (props.onReturnHome) {
      props.onReturnHome();
    }
  };
  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?apikey=e588094d&i=${encodeURIComponent(
        props.peliculaId
      )}`
    )
      .then((val) => val.json())
      .then((pel: object) => setpelicula(objToPeliculaCompleta(pel)));
  }, []);

  return (
    <div>
      <div>PerfilPelicula</div>
      <button onClick={onClickButton}>Volver a Home</button>

      {!pelicula && <div>Cargando</div>}
      {pelicula && (
        <>
          <img src={pelicula.poster} />
          <div>Original title: {pelicula.title}</div>
          <div>
            {pelicula.duration} - {pelicula.year} - {pelicula.rated}
          </div>
          <div>
            Rankings:{" "}
            {pelicula.rankings
              .map((ra) => `${ra.source}: ${ra.value}`)
              .join(" - ")}
          </div>
          <div>Overview</div>
          <div>{pelicula.plot}</div>

          <div>Cast: {pelicula.actors.join(", ")}</div>
          <div>Genre: {pelicula.genre.join(", ")}</div>
          <div>Director: {pelicula.director.join(", ")}</div>
          <div>Writer: {pelicula.director.join(", ")}</div>
        </>
      )}
    </div>
  );
};

export default PeliculaPerfil;
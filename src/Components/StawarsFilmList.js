import React from 'react';
import StarwarsFilm from './StarwarsFilm';
function StarwarsFilmList({ films }) {
  return (
    <div>
      <h1>Starwars Films</h1>
      {films.map((film) => {
        return (
          <StarwarsFilm
            key={(film.episode_id)? film.episode_id : 0}
            id = {film.episode_id}
            title={film.title}
            opening={film.opening_crawl}
            date={film.release_date}
          />
        );
      })}
    </div>
  );
}
export default StarwarsFilmList;

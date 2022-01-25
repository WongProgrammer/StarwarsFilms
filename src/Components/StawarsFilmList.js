import { Stack, Typography } from '@mui/material';
import React from 'react';
import StarwarsFilm from './StarwarsFilm';
function StarwarsFilmList({ films, removeStarwarsFilm }) {
  return (
    <>
      <Typography variant='h1' align='center'>STARWARS FILMS</Typography>
      <Stack spacing={2} >
      {films.map((film) => {
        return (
          <StarwarsFilm
            key={(film.episode_id)? film.episode_id : 0}
            id = {film.episode_id}
            title={film.title}
            opening={film.opening_crawl}
            date={film.release_date}
            removeStarwarsFilm={removeStarwarsFilm}
          />
        );
      })}
      </Stack>
    </>
  );
}
export default StarwarsFilmList;

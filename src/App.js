import { useEffect, useState } from 'react';
import './App.css';
import StarwarsFilmList from './Components/StawarsFilmList';
import Loading from './Components/Loading';
import { Box, Button, Container } from '@mui/material';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';

const url = "https://swapi.dev/api/films"

function App() {
  const [loading, setLoading] = useState(true);
  const [starwarsFilms, setStarwarsFilms] = useState([]);

  const fetchStarwarsFilms = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const starwarsFilms = await response.json();
      setLoading(false);
      setStarwarsFilms(starwarsFilms.results.sort((a, b) => a.episode_id - b.episode_id));

    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const removeStarwarsFilm = (id) => {
    const newStarwarsFilms = starwarsFilms.filter((film) => film.episode_id !== id);
    setStarwarsFilms(newStarwarsFilms);
  }

  useEffect(() => {
    fetchStarwarsFilms();
  }, []);

  if (loading) {
    return (
      <Container
        maxWidth="xl"
      >
        <Box
          display="flex"
          width='auto' height={80}
          alignItems="center"
          justifyContent="center"
        >
          <Loading />
        </Box>

      </Container>
    );
  }

  if (starwarsFilms.length === 0) {
    return (
      <Box
        display="flex"
        width='auto' height={80}
        alignItems="center"
        justifyContent="center"

      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'rgba(125, 245, 185,0.3)',
            '&:hover': {
              backgroundColor: "rgba(0,255,127, 0.3)"
            }
          }}
          onClick={fetchStarwarsFilms}>
          <RefreshOutlinedIcon
            sx={{
              fontSize: 50,

            }} />
        </Button>
      </Box>
    );

  }

  return (
    <Container
      maxWidth="xl"
    >
      <StarwarsFilmList
        films={starwarsFilms}
        removeStarwarsFilm={removeStarwarsFilm}
        refreshList={fetchStarwarsFilms}
      />
    </Container>
  );
}

export default App;

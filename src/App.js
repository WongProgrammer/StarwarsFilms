import { useEffect, useState } from 'react';
import './App.css';
import StarwarsFilmList from './Components/StawarsFilmList';
import Loading from './Components/Loading';

const url = "https://swapi.dev/api/films"

function App() {
  const [loading, setLoading] = useState(true);
  const [starwarsFilms, setStarwarsFilms] = useState([]);

  const fetchStarwarsFilms = async () => {
    try {
      const response = await fetch(url);
      const starwarsFilms = await response.json();
      setLoading(false);
      setStarwarsFilms(starwarsFilms.results.sort((a,b) => a.episode_id - b.episode_id));
      // console.log(starwarsFilms.results);
      // console.log(this.state.starwarsFilms)
    } catch(error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStarwarsFilms();
  }, []);
  if(loading) {
    return (
      <main>
        <Loading/>
      </main>
    )
  }
  return (
    <main>
     <StarwarsFilmList
      films={starwarsFilms}
     />
    </main>
  );
}

export default App;

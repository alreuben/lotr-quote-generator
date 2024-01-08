import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'
import logo from '../images/logo3.webp'
import '../App.css'

const LandingPage = ({film, setFilm}) => {

  const movies = [
    {
      id: '5cd95395de30eff6ebccde5c',
      name: 'The Fellowship of the Ring',
    },

    {
      id: '5cd95395de30eff6ebccde5b',
      name: 'The Two Towers',
    },

    {
      id: '5cd95395de30eff6ebccde5d',
      name: 'The Return of the King',
    }
  ]

  const handleClick = (film, movies) => {
    setFilm(film)
  }

  const DisplayMovies = ({movie}) => {
    return (
      <div>
        <Link to={"/Film"} style={{textDecoration:'none'}}><h3 className="text-center pt-5 pb-3" onClick={() => handleClick(movie.id)}>{movie.name}</h3></Link>
      </div>
    )
  }
 
  return (
    <div className="wrapper-LandingPage">
      <img src={logo} alt='lord of the rings logo' className="mx-auto d-block pt-5" />
      <h1 className="text-center pb-4">Quote Generator</h1>
      <h2 className="text-center pb-2">Choose a Film</h2>
      <div>
      {movies.map((movie) => <DisplayMovies movie={movie} key={movie.id} />)}
      </div>
    </div>
  )
}

export default LandingPage;
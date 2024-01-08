import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from 'react';
import LandingPage from './LandingPage';
import Film from './Film';

const App = () => {

  const [film, setFilm] = useState('')

    return (
      <div className="App">
         <BrowserRouter basename={"/lotrQuoteGenerator"} >
              <Routes>
                  <Route path="/" element={<LandingPage film={film} setFilm={setFilm} />} />
                  <Route path="/Film" element={<Film film={film} setFilm={setFilm} />} />
              </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;
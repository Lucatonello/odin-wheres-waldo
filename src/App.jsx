import { Route, Routes } from 'react-router-dom';
import Game from './routes/Game';
import Highscores from './routes/Highscore';
import Home from './routes/Home';

function App() {
  return (
   <Routes>
    <Route path='/home' element={<Home />} />
    <Route path="/" element={<Game />} />
    <Route path="/high-scores" element={<Highscores />} />
   </Routes>
  );
}

export default App

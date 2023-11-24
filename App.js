import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './tictactoe';
import Joke from './dadjoke';
import Home from './Home';


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tictactoe" element={<Game />} />
        <Route path="/dadjoke" element={<Joke />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
import { useState } from 'react';
import './App.css';
import FrontPage from './components/FrontPage/FrontPage';
import GamePlay from './components/FrontPage/GamePlay';


function App() {
  const [isGamePlay, setIsGamePlay] = useState(false);


  const toggleGamePlay = () => {
    setIsGamePlay((prev) => !prev);
  }


  return (
    <div className = "App">
      {
        isGamePlay ? <GamePlay /> : <FrontPage toggle={toggleGamePlay} />
      }

    </div>
  );
}

export default App;

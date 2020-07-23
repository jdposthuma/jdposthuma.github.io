import React, { useState } from 'react';
import { games } from './services/data'
import Card from './components/Card'
import uuid from 'uuid/v4'
import './App.css';
import './Flip.css';

function App() {

  for (const key in games) {
    const game = games[key];
    game.map(x => Object.assign(x, { key: uuid() }))
  }

  // eslint-disable-next-line
  const [myGames, setMyGames] = useState(games),
    [currentGameName, setCurrentGameName] = useState(null),
    [currentGame, setCurrentGame] = useState(null),
    [showSplashScreen, setShowSplashScreen] = useState(true);

  function startGame(gameName) {
    setCurrentGameName(gameName)
    setCurrentGame(games[gameName])
    setShowSplashScreen(false);
  }

  function reset() {
    setShowSplashScreen(true)
  }

  function renderSplashScreen() {
    return (
      <div className="App" >
        <header>
          <h1 className="title" >Welcome!</h1>
        </header >
        <main className="App-header" >
          {
            Object.keys(myGames).map(x => <button className="cta" key={x} onClick={() => startGame(x)} >{x}</button>)
          }
        </main >
      </div>
    );
  }

  function renderGame() {
    return (
      <div className="App" >
        <header>
          <h1 className="title">{currentGameName} Guess Who</h1>
          <button onClick={reset}>Reset</button>
        </header >
        <main className="App-header">
          {currentGame.map(x => <Card key={x.key} character={x} />)}
        </main>
      </div>
    );
  }

  return showSplashScreen ? renderSplashScreen() : renderGame();
}

export default App;
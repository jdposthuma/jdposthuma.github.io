import React, { useState } from 'react';
import { list } from './services/data'
import Card from './components/Card'
import uuid from 'uuid/v4'
import './App.css';
import './Flip.css';

function App() {

  const listWithUuids = list.map(x => Object.assign(x, { key: uuid() })),// eslint-disable-next-line
    [myList, setMyList] = useState(listWithUuids),
    [showSplashScreen, setShowSplashScreen] = useState(true);

  function startGame() {
    setShowSplashScreen(false);
  }

  function renderSplashScreen() {
    return (
      <div className="App" >
        <header>
          <h1 className="title" >Welcome!</h1>
        </header >
        <main className="App-header" >
          <button className="cta" onClick={startGame} >Start Game</button>
        </main >
      </div>
    );
  }

  function renderGame() {
    return (
      <div className="App" >
        <header>
          <h1 className="title">RWBY Guess Who</h1>
        </header >
        <main className="App-header">
          {myList.map(x => <Card key={x.key} character={x} />)}
        </main>
      </div>
    );
  }

  return showSplashScreen ? renderSplashScreen() : renderGame();
}

export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Flip.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <img src="https://d1o51r9qdgnnlz.cloudfront.net/static_image/8fbc4829-7ccd-4cb4-a8ac-182dac6eb7a3/static.jpg" alt="Blake"  />
              </div>
              <div class="flip-box-back">
                <h2>blake</h2>
                <p>hello world!</p>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

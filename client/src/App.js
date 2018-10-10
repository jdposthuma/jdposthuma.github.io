import React, { Component } from 'react';
import './App.css';
import './Flip.css';

class App extends Component {

  state = {
    flipped: false
  };

  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  clicked() {

    console.log("Clicked!");

    const newState = {
      flipped: !this.state.flipped
    };

    this.setState(newState);
  }

  render() {


    const blakeStyle = {
      backgroundImage: "url(" + "https://d1o51r9qdgnnlz.cloudfront.net/static_image/8fbc4829-7ccd-4cb4-a8ac-182dac6eb7a3/static.jpg" + ")"
    };

    return (
      <div className="App">
        <header className="App-header">
          <div className={"flip-box" + (this.state.flipped ? " flipped" : "")} onClick={this.clicked}>
            <div className="flip-box-inner">
              <div className="flip-box-front" style={blakeStyle}>
              </div>
              <div className="flip-box-back">
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

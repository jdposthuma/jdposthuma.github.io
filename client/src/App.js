import React, { Component } from 'react';
import './App.css';
import './Flip.css';

class App extends Component {

  state = {
    list: [
      {
        name: "blake",
        url: "https://d1o51r9qdgnnlz.cloudfront.net/static_image/8fbc4829-7ccd-4cb4-a8ac-182dac6eb7a3/static.jpg",
        flipped: false
      },
      {
        name: "ruby",
        url: "http://www.ucatx.cat/wallpic/full/99/993147/ruby-rose-rwby-wallpaper.jpg",
        flipped: false
      }
    ]
  };

  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
  }

  clicked(character) {

    console.log("Clicked!", character);

    this.setState(this.state.list.map(x => {
      if (x.name === character.name) {
        x.flipped = !x.flipped;
      }
      return x;
    }));
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.list.map(x => {
              return (
                <div className={"flip-box" + (x.flipped ? " flipped" : "")} onClick={this.clicked.bind(this, x)}>
                  <div className="flip-box-inner">
                    <div className="flip-box-front" style={{
                      backgroundImage: "url(" + x.url + ")"
                    }}>
                    </div>
                    <div className="flip-box-back">
                      <h2>{x.name}</h2>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </header>
      </div>
    );
  }
}

export default App;

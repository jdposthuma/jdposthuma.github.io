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
      },
      {
        name: "weiss",
        url: "https://vignette.wikia.nocookie.net/rwby/images/a/a1/WeissV5Profile.png/revision/latest?cb=20180115225623",
        flipped: false
      },
      {
        name: "yang",
        url:
       "https://vignette.wikia.nocookie.net/rwby/images/4/47/Yang_Vol_5_Profile.png/revision/latest?cb=20171017205551",
        flipped: false

      },  
      {
      name: "nora",
      url:
      "https://vignette.wikia.nocookie.net/rwby/images/0/04/NoraV5Ver2.png/revision/latest?cb=20180113042818"

      },
      {
        name: "pyrrha",
        url:
        "https://vignette.wikia.nocookie.net/rwby/images/4/47/Vol2_Pyrrha_ProfilePic_Uniform.png/revision/latest?cb=20151114141423"

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

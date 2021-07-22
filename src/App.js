import React from 'react';
import './App.css';
import Square from './Square';
import colors from './colors';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      squareColors: colors,
    };
    this.handleBtn1 = this.handleBtn1.bind(this);
    this.handleBtn2 = this.handleBtn2.bind(this);
    this.handleBtn3 = this.handleBtn3.bind(this);
    this.handleBtn4 = this.handleBtn4.bind(this);
    this.handleBtn5 = this.handleBtn5.bind(this);
    this.handleBtn6 = this.handleBtn6.bind(this);
    this.handleBtn7 = this.handleBtn7.bind(this);
    this.handleBtn8 = this.handleBtn8.bind(this);
  }
  handleBtn1() {
    this.setState((prevState) => {
      if (prevState.squareColors[0] === 'white') {
        return {
          squareColors: ['black', 'black', 'black', 'black'],
        };
      } else
        return {
          squareColors: ['white', 'white', 'white', 'white'],
        };
    });
  }
  handleBtn2() {
    this.setState((prevState) => {
      return {
        squareColors: [
          'purple',
          'purple',
          prevState.squareColors[2],
          prevState.squareColors[3],
        ],
      };
    });
  }
  handleBtn3() {
    this.setState((prevState) => {
      return {
        squareColors: [
          prevState.squareColors[0],
          prevState.squareColors[1],
          'blue',
          prevState.squareColors[3],
        ],
      };
    });
  }
  handleBtn4() {
    this.setState((prevState) => {
      return {
        squareColors: [
          prevState.squareColors[0],
          prevState.squareColors[1],
          prevState.squareColors[2],
          'blue',
        ],
      };
    });
  }
  handleBtn5() {
    this.setState((prevState) => {
      return {
        squareColors: [
          'Green',
          prevState.squareColors[1],
          prevState.squareColors[2],
          prevState.squareColors[3],
        ],
      };
    });
  }
  handleBtn6() {
    this.setState((prevState) => {
      return {
        squareColors: [
          prevState.squareColors[0],
          'yellow',
          prevState.squareColors[2],
          prevState.squareColors[3],
        ],
      };
    });
  }
  handleBtn7() {
    this.setState((prevState) => {
      return {
        squareColors: [
          prevState.squareColors[0],
          prevState.squareColors[1],
          'Orange',
          prevState.squareColors[3],
        ],
      };
    });
  }
  handleBtn8() {
    this.setState((prevState) => {
      return {
        squareColors: [
          prevState.squareColors[0],
          prevState.squareColors[1],
          prevState.squareColors[2],
          'Red',
        ],
      };
    });
  }
  render() {
    return (
      <div>
        <div className="grid">
          <Square color={this.state.squareColors[0]} />
          <Square color={this.state.squareColors[1]} />
          <Square color={this.state.squareColors[2]} />
          <Square color={this.state.squareColors[3]} />
        </div>
        <div>
          <button onClick={this.handleBtn1}>Small Time</button>
          <button onClick={this.handleBtn2}>Party</button>
          <button onClick={this.handleBtn3}>Professional 1</button>
          <button onClick={this.handleBtn4}>Professional 2</button>
          <button onClick={this.handleBtn5}>Big Time Top Left</button>
          <button onClick={this.handleBtn6}>Big Time Top Right</button>
          <button onClick={this.handleBtn7}>Big Time Bottom Left</button>
          <button onClick={this.handleBtn8}>Big Time Bottom Right</button>
        </div>
      </div>
    );
  }
}

export default App;

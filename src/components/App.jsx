import React, { Component } from 'react';
import './style.css'

class ColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'lightgray',
    };
  }
  generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  }


  changeColor = () => {
    const newColor = this.generateRandomColor();
    this.setState({ backgroundColor: newColor });
  }

  render() {
    const { backgroundColor } = this.state;
    return (
      <div className="centered-container">
        <button
          onClick={this.changeColor}
          style={{ backgroundColor: backgroundColor }}
          className="color-button"
        >
          Змінити колір
        </button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorChanger />
      </div>
    );
  }
}

export default App;

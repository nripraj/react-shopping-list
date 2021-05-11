import React, { Component } from 'react';
import './style.css';

class App extends Component {
  state = { inputValue: '', itemList: [] };

  onInputValueChnage = e => {
    this.setState({ inputValue: e.target.value });
  };

  onSubmitButtonClick = () => {
    let items = this.state.itemList;
    items.push(this.state.inputValue);
    this.setState({ inputValue: '', itemList: items });
  };

  render() {
    return (
      <div>
        <h1>Hello, please enter your shopping List.</h1>
        <input
          type="text"
          onChange={this.onInputValueChnage}
          value={this.state.inputValue}
        />
        <button onClick={this.onSubmitButtonClick}> click</button>
        <ul>
          {this.state.itemList.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

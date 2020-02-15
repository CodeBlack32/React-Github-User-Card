import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    ghCard: []
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users/CodeBlack32`).then(res => {
      console.log(res);
      this.setState({
        ghCard: res.data
      });
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>GitHub User Card</h1>
        </header>
      </div>
    );
  }
}
export default App;

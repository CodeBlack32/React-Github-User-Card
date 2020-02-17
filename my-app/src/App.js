import React, { Component } from "react";
import axios from "axios";
import GitHubCard from "./GitHubCard";
import "./App.css";

const followersArray = [
  "https://api.github.com/users/tetondan",
  "https://api.github.com/users/dustinmyers",
  "https://api.github.com/users/justsml",
  "https://api.github.com/users/luishrd",
  "https://api.github.com/users/bigknell"
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      ghData: [],
      followData: []
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/CodeBlack32`).then(res => {
      console.log(res.data);
      this.setState({
        ghData: res.data
      });
    });

    axios.get(followersArray).then(res => {
      this.setState({
        followData: res.data
      });
    });
  }

  render() {
    console.log(this.state.ghData, this.state.followData);
    return (
      <div className="App">
        <h1>GitHub User Card</h1>
        <GitHubCard data={this.state} />
      </div>
    );
  }
}

export default App;

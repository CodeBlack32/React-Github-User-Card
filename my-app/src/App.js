import React, { Component } from "react";
import axios from "axios";
import GitHubCard from "./GitHubCard";
import "./App.css";
import Card from "./Card";

const followersArray = [
  "https://api.github.com/users/tetondan",
  "https://api.github.com/users/dustinmyers",
  "https://api.github.com/users/justsml",
  "https://api.github.com/users/luishrd",
  "https://api.github.com/users/bigknell",
  "https://api.github.com/users/dvwhite"
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
      this.setState({
        ghData: res.data
      });
    });

    followersArray.forEach(follower => {
      axios.get(follower).then(res => {
        this.setState({
          followData: [...this.state.followData, res.data]
        });
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User Card</h1>
        <GitHubCard data={this.state.ghData} />
        {this.state.followData.map(follower => (
          <Card key={follower.login} {...follower} />
        ))}
      </div>
    );
  }
}

export default App;

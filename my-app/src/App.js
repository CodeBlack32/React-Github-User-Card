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
      followData: [],
      followers: []
    };
  }

  componentDidMount() {
    // Beware: then-ception ahead as a workaround for 
    // different data shape for users and followers

    // GET request for user object
    axios.get(`https://api.github.com/users/CodeBlack32`)
      .then(res => {
        this.setState({ghData: res.data})
        return res.data;
      })
        .then(data => {
          // GET request passing user object's follower's property
          axios.get(data.followers_url)
            .then(res => {
              // Map over each follower in the follower's array (an array of objects with a login property)
              res.data.map(follower => {
                // GET request for the follower object (to contain all possible data points)
                axios.get(`https://api.github.com/users/${follower.login}`)
                  .then(res => {
                    this.setState({
                      ...this.state, 
                      followers: [...this.state.followers, res.data]})
                  })
              })
            })
        })
        .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User Card</h1>
        <GitHubCard data={this.state.ghData} />
        {this.state.followers.map(follower => (
          <Card key={follower.login} {...follower} />
        ))}
      </div>
    );
  }
}

export default App;

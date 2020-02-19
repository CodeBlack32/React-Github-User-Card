import React from "react";

function GitHubCard(props) {
  return (
    <div>
      <div className="my-card">
        <img src={props.data.avatar_url} alt="something" />
        <ul>
          <li>{props.data.name}</li>
          <li>{props.data.login}</li>
          <li>
            <a href={props.data.html_url}>GitHub Connection</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GitHubCard;

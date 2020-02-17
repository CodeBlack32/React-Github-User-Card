import React from "react";

function GitHubCard(props) {
  return (
    <div>
      <div className="my-card">
        <img src={props.data.ghData.avatar_url} alt={Image} />
        <ul>
          <li>{props.data.ghData.name}</li>
          <li>{props.data.ghData.login}</li>
          <li>
            <a href={props.data.ghData.html_url}>GitHub Connection</a>
          </li>
        </ul>
      </div>
      <div className="card">
        <img src={props.data.followData.avatar_url} alt={Image} />
        <ul>
          <li>{props.data.followData.name}</li>
          <li>{props.data.followData.login}</li>
          <li>
            <a href={props.data.followData.html_url}>GitHub Connection</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GitHubCard;

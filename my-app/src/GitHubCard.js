import React, { useState, useEffect } from "react";

function GitHubCard({data}) {
  return (
    <div>
      <div className="my-card" id={data.id}>
        <img src={data.avatar_url} alt='GH avatar' />
        <ul>
          <li>{data.name}</li>
          <li>{data.login}</li>
          <li>
            <a href={data.html_url}>GitHub Connection</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GitHubCard;

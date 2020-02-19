import React, { useState, useEffect } from "react";

function GitHubCard({data}) {
  return (
    <div>
      <div className="my-card" id={data.ghData.id}>
        <img src={data.ghData.avatar_url} alt='GH avatar' />
        <ul>
          <li>{data.ghData.name}</li>
          <li>{data.ghData.login}</li>
          <li>
            <a href={data.ghData.html_url}>GitHub Connection</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GitHubCard;

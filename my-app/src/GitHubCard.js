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
      {
        data.followers.length > 0 ? 
          (data.followers.map((follower, idx) => (
            <div className="card" id={follower.id}>
              <img src={follower.avatar_url} alt="follower card" />
              <ul>
                <li>{follower.name}</li>
                <li>{follower.login}</li>
                <li>
                  <a href={follower?.html_url}>GitHub Connection</a>
                </li>
              </ul>
            </div>
          )))
        : null
      }
    </div>
  );
}

export default GitHubCard;

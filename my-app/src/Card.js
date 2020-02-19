import React from "react";

const Card = ({ avatar_url, name, login, html_url }) => {
  return (
    <div className="card">
      <img src={avatar_url} alt={name} />
      <ul>
        <li>{name}</li>
        <li>{login}</li>
        <li>
          <a href={html_url}>GitHub Connection</a>
        </li>
      </ul>
    </div>
  );
};

export default Card;

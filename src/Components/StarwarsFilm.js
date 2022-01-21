import React from 'react';
//used Chrome Extensions "Web Server for Chrome to show local images"
function StarwarsFilm({id, title, opening, date }) {
  return (
    <article>
      <img src={`http://127.0.0.1:8887/src/Images/film${id}.jpg`}/>
      <h3>{title}</h3>
      <h4>{date}</h4>
      <p>{opening}</p>
    </article>
  );
}
export default StarwarsFilm;

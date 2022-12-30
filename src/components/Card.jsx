import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <div className="card-info">
        <img className="card-img" src={props.URL} alt={props.position} />
        <strong>
          {props.name}
          <br /> {props.position}
        </strong>
        <a href="*">Зв'язатись</a>
        <span>{props.email}</span>
        <span>{props.tel}</span>
      </div>
    </div>
  );
}
export default Card;

import React from 'react';
import './Card.css';

export const Card = ( { character }) => {

  const {  name, nickname, status, occupation, img } = character;
  // char_id,
  return (
    <div className="card my-3">
      <div className="card">
        <img src={img} className="card-img-top" alt={name}/>
          <div className="card-body">
            <span className={`btn btn sm float-end ${status.toLowerCase().includes("alive") ? "btn-success" : "btn-danger" }`} >
            {status}
            </span>

            <h5 className="card-title">{name}</h5>
            <p className="card-text">{nickname}</p>

            <div className="row text-left">
              <p className="text-muted">
                Occupation
              </p>
              <hr/>
            {occupation.map((item, index)=> {
              return <strong key={index}>{item}</strong>
            })}

          </div>
        </div>
      </div>
    </div>
  )
}

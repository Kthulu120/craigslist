import React from 'react';

export const Card = (props) => (
  <div className="d-flex flex-column card" style={{height: 100, width: 100, backgroundColor: 'white'}}>
    <img className="flex-self-center pt-2" height={32} width={32} alt={props.text} src={props.icon} />
    <p className="flex-self-center">{props.text}</p>
  </div>
);
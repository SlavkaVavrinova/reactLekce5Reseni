import React from 'react';
import './style.css';

/* 1. část
const City = ({town}) => {
  return (
    <>
      <div className="city">{town}</div>{' '}
    </>
  );
};

export default City;

 2.část
const City = ({town, population,area}) => {
  return (
    <div className="city">
      {props.town}
      <p>Počet obyvatel: {props.population}</p>
      <p>Rozloha: {props.area}</p>
    </div>
  );
};

export default City;*/

const City = ({ name, photo, population, area, district }) => {
  return (
    <div className="city">
      <h2 className="city__title">{name}</h2>
      <img src={photo} alt={name} />
      <div>
        <p>Počet obyvatel: {population}</p>
        <p>Rozloha: {area}</p>
        <p>Okres: {district}</p>
      </div>
    </div>
  );
};

export default City;

import React from 'react';
import { render } from 'react-dom';
import './style.css';
import City from './Components/City';
import { cities } from './cz-cities';

/* 1.část 

const cities = [
  'Praha',
  'Brno',
  'Ostrava',
  'Plzeň',
  'Liberec',
  'Olomouc',
  'České Budějovice',
  'Hradec Králové',
  'Ústí nad Labem',
  'Pardubice',
];

const App = () => {
  return (
    <>
      {cities.map((city) => (
        <City town={city} key={city} />
      ))}
    </>
  );
};


2. část 

const cities = [
  {
    name: 'Praha',
    population: 1324277,
    area: 496.21,
  },
  {
    name: 'Brno',
    population: 381346,
    area: 230.18,
  },
  {
    name: 'Ostrava',
    population: 287968,
    area: 214.23,
  },
  {
    name: 'Plzeň',
    population: 174842,
    area: 137.67,
  },
  {
    name: 'Liberec',
    population: 104802,
    area: 106.09,
  },
  {
    name: 'Olomouc',
    population: 100663,
    area: 103.33,
  },
  {
    name: 'České Budějovice',
    population: 94463,
    area: 55.6,
  },
  {
    name: 'Hradec Králové',
    population: 92939,
    area: 105.69,
  },
  {
    name: 'Ústí nad Labem',
    population: 92716,
    area: 93.97,
  },
  {
    name: 'Pardubice',
    population: 91727,
    area: 82.66,
  },
];

const App = () => {
  return (
    <>
      {cities.map((city) => (
        <City
          town={city.name}
          key={city.name}
          population={city.population}
          area={city.area}
        />
      ))}
    </>
  );
};

*/

const App = () => {
  return (
    <div className="cityes">
      {cities.map((city) => (
        <City
          key={city.name}
          name={city.name}
          photo={city.photo}
          population={city.population}
          area={city.area}
          district={city.district}
        />
        // Kratší zápis spread operátor: <City {...city} key={city.name} />
      ))}
    </div>
  );
};

// city.name není ideální key, protože v souboru s městy máme pár se steným názvem. Bylo by dobré přidat ID.

render(<App />, document.querySelector('#app'));

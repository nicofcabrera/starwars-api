import React from 'react';
import { Link } from 'react-router-dom';

const Tabs = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link" to="/people">Actors</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/planets">Planets</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/films">Films</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/starships">Starships</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/vehicles">Vehicles</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/species">Species</Link>
      </li>
    </ul>
  )
}

export default Tabs;

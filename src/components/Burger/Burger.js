import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_ROUTE, CATALOG_ROUTE, FAVORITES_ROUTE } from 'utils/const';


const Burger = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={HOME_ROUTE}>Home</Link>
        </li>
        <li>
          <Link to={CATALOG_ROUTE}>Catalog</Link>
        </li>
        <li>
          <Link to={FAVORITES_ROUTE}>Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Burger;

import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_ROUTE, CATALOG_ROUTE, FAVORITES_ROUTE } from 'utils/const';
import css from './Header.module.css'

const routes = [
  { path: HOME_ROUTE, label: 'Home' },
  { path: CATALOG_ROUTE, label: 'Catalog' },
  { path: FAVORITES_ROUTE, label: 'Favorites' },
];

const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.list}>
          {routes.map((route, i) => (
            <li key={i}>
              <Link className={css.link} to={route.path}>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

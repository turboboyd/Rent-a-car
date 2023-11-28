import { HomePage, CatalogPage, FavoritesPage } from 'page';
import { HOME_ROUTE, CATALOG_ROUTE, FAVORITES_ROUTE } from 'utils/const';

const publicRoutes = [
  {
    path: HOME_ROUTE,
    Element: <HomePage />,
  },
  {
    path: CATALOG_ROUTE,
    Element: <CatalogPage />,
  },
  {
    path: FAVORITES_ROUTE,
    Element: <FavoritesPage />,
  },
];

export default publicRoutes;

import { lazy } from 'react';

export const HomePage = lazy(() => import('./HomePage/Homepage'));
export const CatalogPage = lazy(() => import('./CatalogPage/CatalogPage'));
export const FavoritesPage = lazy(() =>import('./FavoritesPage/FavoritesPage'));

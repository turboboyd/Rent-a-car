import {Navigate, Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import publicRoutes from './Routs';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {publicRoutes.map(({ path, Element }) => (
            <Route key={path} path={path} element={Element} exact />
          ))}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

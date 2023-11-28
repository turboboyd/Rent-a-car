import { Routes, Route } from 'react-router-dom';
import publicRoutes from './Routs';



export const App = () => {
  return (
    <>
      <Routes>
        {publicRoutes.map(({ path, Element }) => (
          <Route key={path} path={path} element={Element} exact />
        ))}
      </Routes>
    </>
  );
};

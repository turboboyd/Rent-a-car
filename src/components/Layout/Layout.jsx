import { Suspense, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

export default function Layout() {
  return (
    <>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

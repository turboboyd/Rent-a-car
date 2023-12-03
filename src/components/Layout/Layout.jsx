import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import Header from 'components/Header/Header';

export default function Layout() {
  return (
    <>
      <Container>
        <Header />  
      </Container>
      <main>
        <Section>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </main>
    </>
  );
}

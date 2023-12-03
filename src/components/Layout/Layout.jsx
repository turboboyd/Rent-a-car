import { Suspense} from 'react';
import { Outlet} from 'react-router-dom';
import Loader from '../Loader/Loader';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import Burger from 'components/Burger/Burger';
// import PropTypes from 'prop-types';
export default function Layout() {
  return (
    <>
      <main>
        <Burger/>
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

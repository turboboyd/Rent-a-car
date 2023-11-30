import { Suspense} from 'react';
import { Outlet} from 'react-router-dom';
import Loader from '../Loader/Loader';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
// import PropTypes from 'prop-types';
export default function Layout() {
  return (
    <>
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

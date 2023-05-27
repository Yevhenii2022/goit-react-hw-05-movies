import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Logo, Navigation, Loader, Container } from 'components';
import { AppHeader, AppBar, MainSection } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <AppHeader>
        <Container>
          <AppBar>
            <Logo />
            <Navigation />
          </AppBar>
        </Container>
      </AppHeader>
      <Container>
        <MainSection>
          <Suspense fallback={<Loader />}>
            <Outlet />
            <Toaster position="top-right" reverseOrder={false} />
          </Suspense>
        </MainSection>
      </Container>
    </>
  );
};

export default SharedLayout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import { Logo, Navigation } from 'components';
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
          <Outlet />
        </MainSection>
      </Container>
    </>
  );
};

export default SharedLayout;

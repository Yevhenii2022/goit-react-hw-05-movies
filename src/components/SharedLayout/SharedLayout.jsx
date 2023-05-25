import React from 'react';
import Container from 'components/Container/Container';
import { Logo } from 'components';
import { AppHeader, AppBar, MainSection } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <AppHeader>
        <Container>
          <AppBar>
            <Logo />
          </AppBar>
        </Container>
      </AppHeader>
      <Container>
        <MainSection></MainSection>
      </Container>
    </>
  );
};

export default SharedLayout;

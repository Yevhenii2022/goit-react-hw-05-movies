import React from 'react';

import Container from 'components/Container/Container';

import { AppHeader, AppBar, MainSection } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <AppHeader>
        <Container>
          <AppBar></AppBar>
        </Container>
      </AppHeader>
      <Container>
        <MainSection></MainSection>
      </Container>
    </>
  );
};

export default SharedLayout;

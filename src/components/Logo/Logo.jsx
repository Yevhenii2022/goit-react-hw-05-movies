import { NavLink } from 'react-router-dom';
import { AppName, AppNameExpansion } from './Logo.styled';

const Logo = () => {
  return (
    <AppName>
      <NavLink to="/">Filmer</NavLink>
      <AppNameExpansion>.app</AppNameExpansion>
    </AppName>
  );
};

export default Logo;

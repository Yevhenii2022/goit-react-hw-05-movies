import { ButtonLink } from '../../components/index';
import { NotFoundMessage, NotFoundWrapper } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <NotFoundMessage>🐒 404 Page not found 🙈 🙉 🙊</NotFoundMessage>
      <ButtonLink to="/" text="Go Home" />
    </NotFoundWrapper>
  );
};

export default NotFoundPage;

import PropTypes from 'prop-types';
import { PageTitle } from './PageHeading.styled';

const PageHeading = ({ text }) => {
  return <PageTitle>{text}</PageTitle>;
};

PageHeading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageHeading;

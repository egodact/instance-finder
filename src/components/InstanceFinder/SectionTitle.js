import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const SectionTitle = styled('h1')({
  marginTop: 0,
  marginBottom: 18,
  fontWeight: 400
}, ({ withMarginTop }) => ({
  marginTop: withMarginTop ? 24 : 0
}));

SectionTitle.propTypes = {
  withMarginTop: PropTypes.bool
};

SectionTitle.defaultProps = {
  withMarginTop: false
};

export default SectionTitle;

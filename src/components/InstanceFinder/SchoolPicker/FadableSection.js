import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { transition } from '../../../styles/utils';

const FadableSection = styled('section')({
  transition
}, ({ faded }) => {
  if (faded) {
    return {
      opacity: .5
    };
  }
});

FadableSection.propTypes = {
  faded: PropTypes.bool
};

FadableSection.defaultProps = {
  faded: false
};

export default FadableSection;

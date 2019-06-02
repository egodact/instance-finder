import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { grey } from '../../../styles/colors';

const SchoolList = styled('section')({
  border: `2px solid ${grey}`,
  borderTop: 0,
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4
}, ({ open }) => {
  if (!open) {
    return {
      display: 'none'
    };
  }
});

SchoolList.propTypes = {
  open: PropTypes.bool
};

SchoolList.defaultProps = {
  open: false
};

export default SchoolList;

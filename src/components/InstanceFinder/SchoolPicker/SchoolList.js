import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { grey } from '../../../styles/colors';
import { mediaQuery } from '../../../styles/utils';

const SchoolList = styled('section')({
  maxHeight: 240,
  overflowY: 'auto',
  border: `2px solid ${grey}`,
  borderTop: 0,
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4,
  [mediaQuery(640)]: {
    maxHeight: 'none',
    overflowY: 'initial'
  }
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

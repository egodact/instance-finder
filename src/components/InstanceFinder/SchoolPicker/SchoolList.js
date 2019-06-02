import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const SchoolList = styled('div')({
  position: 'absolute',
  color: 'purple',
  backgroundColor: 'green'
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

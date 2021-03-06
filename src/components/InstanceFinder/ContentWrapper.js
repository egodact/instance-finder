import styled from '@emotion/styled';
import { mediaQuery } from '../../styles/utils';

const ContentWrapper = styled('main')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  maxHeight: '100vh',
  transform: 'translate(-50%, -50%)',
  [mediaQuery(640)]: {
    position: 'relative',
    top: 'unset',
    left: 'unset',
    minHeight: '100vh',
    maxHeight: 'none',
    transform: 'none',
    display: 'flex',
    flexDirection: 'column'
  }
});

export default ContentWrapper;

import styled from '@emotion/styled';
import { mediaQuery } from '../../../styles/utils';

const PlatformTilesWrapper = styled('section')({
  display: 'flex',
  flexWrap: 'wrap',
  [mediaQuery(480)]: {
    display: 'block'
  }
});

export default PlatformTilesWrapper;

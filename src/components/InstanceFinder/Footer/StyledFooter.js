import styled from '@emotion/styled';
import { mediaQuery } from '../../../styles/utils';

const StyledFooter = styled('footer')({
  paddingTop: 12,
  paddingBottom: 12,
  color: '#9E9E9E',
  textAlign: 'center',
  [mediaQuery(640)]: {
    marginTop: 'auto',
    paddingTop: 24,
    paddingBottom: 24,
    backgroundColor: '#F6F7FB'
  }
});

export default StyledFooter;

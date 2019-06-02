import styled from '@emotion/styled';
import { mediaQuery } from '../../../styles/utils';

const HeadlineContentWrapper = styled('header')({
  marginBottom: 8,
  display: 'flex',
  alignItems: 'center',
  [mediaQuery(640)]: {
    marginTop: 0,
    paddingTop: 24,
    paddingBottom: 18,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: '#F6F7FB'
  }
});

export default HeadlineContentWrapper;

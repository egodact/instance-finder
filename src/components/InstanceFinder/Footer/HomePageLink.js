import styled from '@emotion/styled';
import { transition } from '../../../styles/utils';
import { black } from '../../../styles/colors';

const HomePageLink = styled('a')({
  color: 'inherit',
  textDecoration: 'none',
  transition,
  ':hover': {
    color: black
  }
});

export default HomePageLink;

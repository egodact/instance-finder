import styled from '@emotion/styled';
import { grey } from '../../../styles/colors';
import { transition } from '../../../styles/utils';

const School = styled('div')({
  padding: 12,
  cursor: 'pointer',
  transition,
  ':hover': {
    backgroundColor: grey
  }
});

export default School;

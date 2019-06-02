import styled from '@emotion/styled';
import { transition } from '../../../styles/utils';

const BackButton = styled('button')({
  marginTop: 24,
  padding: 0,
  marginLeft: 'auto',
  font: 'inherit',
  color: '#757575',
  background: 'none',
  border: 0,
  appearance: 'none',
  outlineWidth: 0,
  cursor: 'pointer',
  transition,
  ':hover': {
    color: 'inherit'
  }
});

export default BackButton;

import styled from '@emotion/styled';
import { white } from '../../styles/colors';
import { mediaQuery } from '../../styles/utils';

const ContentCard = styled('section')({
  padding: 24,
  width: 560,
  maxWidth: '100vw',
  backgroundColor: white,
  borderRadius: 8,
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12)',
  boxSizing: 'border-box',
  [mediaQuery(640)]: {
    width: '100%',
    borderRadius: 0,
    boxShadow: 'none'
  }
});

export default ContentCard;

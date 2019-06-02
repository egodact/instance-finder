import styled from '@emotion/styled';
import { transition } from '../../../../styles/utils';
import { white } from '../../../../styles/colors';
import PlatformTileName from './PlatformTileName';

const PlatformTile = styled('a')({
  padding: 12,
  marginRight: 24,
  flex: 1,
  textAlign: 'center',
  color: '#0F4E8B',
  fontFamily: 'CircularStd',
  backgroundColor: '#EEEEEE',
  textDecoration: 'none',
  borderRadius: 4,
  display: 'block',
  transition,
  ':hover': {
    color: white,
    backgroundColor: '#0F4E8B'
  },
  ':last-child': {
    marginRight: 0
  }
});

PlatformTile.Name = PlatformTileName;

export default PlatformTile;

import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { transition, mediaQuery } from '../../../../styles/utils';
import { white } from '../../../../styles/colors';
import PlatformTileName from './PlatformTileName';

const PlatformTile = styled('a')({
  padding: '36px 12px',
  marginRight: 24,
  flex: 1,
  textAlign: 'center',
  color: '#0F4E8B',
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
  },
  [mediaQuery(480)]: {
    marginRight: 0,
    marginBottom: 24,
    ':last-child': {
      marginBottom: 0
    }
  }
}, ({ href }) => {
  if (href) {
    return
  };

  return {
    opacity: .7,
    cursor: 'auto',
    ':hover': {
      color: '#0F4E8B',
      backgroundColor: '#EEEEEE'
    }
  };
});

PlatformTile.propTypes = {
  href: PropTypes.string
};

PlatformTile.Name = PlatformTileName;

export default PlatformTile;

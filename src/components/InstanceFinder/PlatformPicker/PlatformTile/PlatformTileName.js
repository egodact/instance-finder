import React from 'react';
import PropTypes from 'prop-types';
import PlatformTypes from '../PlatformTypes';
import { FormattedMessage } from 'react-intl';

const PlatformTileName = ({ platformType, ...props }) => (
  <FormattedMessage id={`platform_picker.platforms.${platformType}`} />
);

PlatformTileName.propTypes = {
  platformType: PropTypes.oneOf([
    PlatformTypes.CHALLENGEMONITOR,
    PlatformTypes.PROGRESSMONITOR
  ]).isRequired
};

export default PlatformTileName;

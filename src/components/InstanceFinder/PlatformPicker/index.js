import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle';
import { FormattedMessage } from 'react-intl';
import instances from '../../../instances.json';
import PlatformTypes from './PlatformTypes';
import PlatformTilesWrapper from './PlatformTilesWrapper';
import PlatformTile from './PlatformTile';

const PlatformPicker = ({ selectedSchool, onGoBack, ...props }) => {
  const urls = instances.urls[selectedSchool];

  return (
    <section>
      <SectionTitle withMarginTop>
        <FormattedMessage id="platform_picker.title" />
      </SectionTitle>
      <PlatformTilesWrapper>
        <PlatformTile href={urls[PlatformTypes.CHALLENGEMONITOR]}>
          <PlatformTile.Name platformType={PlatformTypes.CHALLENGEMONITOR} />
        </PlatformTile>
        <PlatformTile href={urls[PlatformTypes.PROGRESSMONITOR]}>
          <PlatformTile.Name platformType={PlatformTypes.PROGRESSMONITOR} />
        </PlatformTile>
      </PlatformTilesWrapper>
      <button onClick={onGoBack}>
        <FormattedMessage id="platform_picker.go_back_button" />
      </button>
    </section>
  );
};

PlatformPicker.propTypes = {
  selectedSchool: PropTypes.string.isRequired,
  onGoBack: PropTypes.func.isRequired
};

export default PlatformPicker;

import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle';
import { FormattedMessage } from 'react-intl';
import instances from '../../../instances.json';
import PlatformTypes from './PlatformTypes';
import PlatformTilesWrapper from './PlatformTilesWrapper';
import PlatformTile from './PlatformTile';
import BackButton from './BackButton';

const PlatformPicker = ({ selectedSchool, onGoBack, ...props }) => {
  const urls = instances.urls[selectedSchool];

  return (
    <section>
      <SectionTitle withMarginTop>
        <FormattedMessage id="platform_picker.title" />
      </SectionTitle>
      <PlatformTilesWrapper>
        <PlatformTile
          href={urls[PlatformTypes.CHALLENGEMONITOR]}
          target="_blank"
        >
          <PlatformTile.Name platformType={PlatformTypes.CHALLENGEMONITOR} />
        </PlatformTile>
        <PlatformTile
          href={urls[PlatformTypes.PROGRESSMONITOR]}
          target="_blank"
        >
          <PlatformTile.Name platformType={PlatformTypes.PROGRESSMONITOR} />
        </PlatformTile>
      </PlatformTilesWrapper>
      <BackButton onClick={onGoBack}>
        <FormattedMessage id="platform_picker.go_back_button" />
      </BackButton>
    </section>
  );
};

PlatformPicker.propTypes = {
  selectedSchool: PropTypes.string.isRequired,
  onGoBack: PropTypes.func.isRequired
};

export default PlatformPicker;

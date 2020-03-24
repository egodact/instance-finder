import React from 'react';
import PropTypes from 'prop-types';
import StyledSection from './StyledSection';
import SectionTitle from '../SectionTitle';
import { FormattedMessage } from 'react-intl';
import PlatformTypes from './PlatformTypes';
import PlatformTilesWrapper from './PlatformTilesWrapper';
import PlatformTile from './PlatformTile';
import BackButton from './BackButton';
import buildUrl from './buildUrl';

const PlatformPicker = ({ selectedSchool, onGoBack, ...props }) => (
  <StyledSection>
    <SectionTitle withMarginTop>
      <FormattedMessage id="platform_picker.title" />
    </SectionTitle>
    <PlatformTilesWrapper>
      <PlatformTile
        href={buildUrl(selectedSchool, PlatformTypes.CHALLENGEMONITOR)}
        target="_blank"
      >
        <PlatformTile.Name platformType={PlatformTypes.CHALLENGEMONITOR} />
      </PlatformTile>
      <PlatformTile
        href={buildUrl(selectedSchool, PlatformTypes.PROGRESSMONITOR)}
        target="_blank"
      >
        <PlatformTile.Name platformType={PlatformTypes.PROGRESSMONITOR} />
      </PlatformTile>
    </PlatformTilesWrapper>
    <BackButton onClick={onGoBack}>
      <FormattedMessage id="platform_picker.go_back_button" />
    </BackButton>
  </StyledSection>
);

PlatformPicker.propTypes = {
  selectedSchool: PropTypes.string.isRequired,
  onGoBack: PropTypes.func.isRequired
};

export default PlatformPicker;

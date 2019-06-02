import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle';
import { FormattedMessage } from 'react-intl';
import instances from '../../../instances.json';
import PlatformTypes from './PlatformTypes';

const PlatformPicker = ({ selectedSchool, onGoBack, ...props }) => {
  const urls = instances.urls[selectedSchool];

  return (
    <section>
      <SectionTitle withMarginTop>
        <FormattedMessage id="platform_picker.title" />
      </SectionTitle>
      <div style={{ height: 200, display: 'flex' }}>
        <a href={urls[PlatformTypes.CHALLENGEMONITOR]}>
          <FormattedMessage id="platform_picker.platforms.CHALLENGEMONITOR" />
        </a>
        <a href={urls[PlatformTypes.PROGRESSMONITOR]}>
          <FormattedMessage id="platform_picker.platforms.PROGRESSMONITOR" />
        </a>
      </div>
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

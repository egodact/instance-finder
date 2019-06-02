import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle';
import instances from '../../../instances.json';
import SearchInput from './SearchInput';
import { FormattedMessage } from 'react-intl';

const schools = instances.schools;

const SchoolPicker = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSchool, setSelectedSchool] = useState(null);

  const prepareForSearch = str => str.trim().toLowerCase();

  return (
    <section>
      <SectionTitle>
        <FormattedMessage id="school_picker.title" />
      </SectionTitle>
      <SearchInput
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <ul>
        {schools.map(school => {
          if (
            !prepareForSearch(school.name).includes(
              prepareForSearch(searchQuery)
            )
          ) {
            return;
          }

          return <li key={school.id}>{school.name}</li>;
        })}
      </ul>
    </section>
  );
};

SchoolPicker.propTypes = {
  setSchool: PropTypes.func.isRequired
};

export default SchoolPicker;

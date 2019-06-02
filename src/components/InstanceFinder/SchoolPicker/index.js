import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle';
import instances from '../../../instances.json';
import SearchInput from './SearchInput';
import SchoolList from './SchoolList';
import { FormattedMessage } from 'react-intl';

const schools = instances.schools;

const SchoolPicker = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [schoolListOpen, setSchoolListOpen] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState(null);

  const prepareForSearch = str => str.trim().toLowerCase();

  return (
    <section>
      <SectionTitle>
        <FormattedMessage id="school_picker.title" />
      </SectionTitle>
      <SearchInput
        value={searchQuery}
        onChange={e => {
          setSearchQuery(e.target.value);
          setSchoolListOpen(true);
        }}
      />
      <SchoolList open={schoolListOpen}>
        {schools.map(school => {
          if (
            !prepareForSearch(school.name).includes(
              prepareForSearch(searchQuery)
            )
          ) {
            return;
          }

          return (
            <li
              onClick={() => {
                setSearchQuery(school.name);
                setSchoolListOpen(false);
                setSelectedSchool(school.id);
              }}
              key={school.id}
            >
              {school.name}
            </li>
          );
        })}
      </SchoolList>
    </section>
  );
};

SchoolPicker.propTypes = {
  setSchool: PropTypes.func.isRequired
};

export default SchoolPicker;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle';
import instances from '../../../instances.json';
import FadableSection from './FadableSection';
import SearchInput from './SearchInput';
import SchoolList from './SchoolList';
import NoMatchingSchools from './NoMatchingSchools';
import School from './School';
import { FormattedMessage } from 'react-intl';

const schools = instances.schools;

const SchoolPicker = ({ active, onSchoolSelect, ...props }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [schoolListOpen, setSchoolListOpen] = useState(false);

  const prepareForSearch = str => str.trim().toLowerCase();

  const schoolsMatchingSearchQuery = schools.filter(school =>
    prepareForSearch(school.name).includes(prepareForSearch(searchQuery))
  );

  return (
    <FadableSection faded={!active} {...props}>
      <SectionTitle>
        <FormattedMessage id="school_picker.title" />
      </SectionTitle>
      <SearchInput
        value={searchQuery}
        onChange={e => {
          setSearchQuery(e.target.value);
          setSchoolListOpen(true);
        }}
        disabled={!active}
      />
      <SchoolList open={schoolListOpen}>
        {schoolsMatchingSearchQuery.length === 0 && (
          <NoMatchingSchools>
            <FormattedMessage
              id="school_picker.school_list.no_matching_schools"
            />
          </NoMatchingSchools>
        )}
        {schoolsMatchingSearchQuery.map(school => (
          <School
            onClick={() => {
              setSearchQuery(school.name);
              setSchoolListOpen(false);
              onSchoolSelect(school.id);
            }}
            key={school.id}
          >
            {school.name}
          </School>
        ))}
      </SchoolList>
    </FadableSection>
  );
};

SchoolPicker.propTypes = {
  active: PropTypes.bool,
  onSchoolSelect: PropTypes.func.isRequired
};

SchoolPicker.defaultProps = {
  active: true
};

export default SchoolPicker;

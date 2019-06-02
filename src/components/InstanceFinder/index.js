import React, { useState } from 'react';
import ContentWrapper from './ContentWrapper';
import ContentCard from './ContentCard';
import SignInHeadline from './SignInHeadline';
import SchoolPicker from './SchoolPicker';

const InstanceFinder = () => {
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [schoolPickerActive, setSchoolPickerActive] = useState(true);

  return (
    <ContentWrapper>
      <SignInHeadline />
      <ContentCard>
        <SchoolPicker
          active={schoolPickerActive}
          onSchoolSelect={(schoolId) => {
            setSelectedSchool(schoolId);
            setSchoolPickerActive(false);
          }}
        />
      </ContentCard>
    </ContentWrapper>
  );
};

export default InstanceFinder;

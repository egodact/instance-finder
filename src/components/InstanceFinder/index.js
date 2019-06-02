import React, { useState } from 'react';
import ContentWrapper from './ContentWrapper';
import ContentCard from './ContentCard';
import SignInHeadline from './SignInHeadline';
import SchoolPicker from './SchoolPicker';
import PlatformPicker from './PlatformPicker';

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
        {!schoolPickerActive &&
          <PlatformPicker
            selectedSchool={selectedSchool}
            onGoBack={() => setSchoolPickerActive(true)}
          />
        }
      </ContentCard>
    </ContentWrapper>
  );
};

export default InstanceFinder;

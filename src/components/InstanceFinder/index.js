import React, { useState } from 'react';
import ContentWrapper from './ContentWrapper';
import ContentCard from './ContentCard';
import SignInHeadline from './SignInHeadline';
import SchoolPicker from './SchoolPicker';
import PlatformPicker from './PlatformPicker';
import Footer from './Footer';
import getCachedSelectedSchool from './getCachedSelectedSchool';

const InstanceFinder = () => {
  const cachedSelectedSchool = getCachedSelectedSchool();
  const [selectedSchool, setSelectedSchool] = useState(cachedSelectedSchool);
  const [schoolPickerActive, setSchoolPickerActive] = useState(
    !cachedSelectedSchool
  );

  return (
    <ContentWrapper>
      <SignInHeadline />
      <ContentCard>
        <SchoolPicker
          active={schoolPickerActive}
          onSchoolSelect={schoolId => {
            setSelectedSchool(schoolId);
            setSchoolPickerActive(false);
            localStorage.setItem('selected-school', schoolId);
          }}
        />
        {!schoolPickerActive &&
          <PlatformPicker
            selectedSchool={selectedSchool}
            onGoBack={() => {
              setSchoolPickerActive(true);
              localStorage.removeItem('selected-school');
            }}
          />
        }
      </ContentCard>
      <Footer />
    </ContentWrapper>
  );
};

export default InstanceFinder;

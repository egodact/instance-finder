import React, { useState } from 'react';
import ContentWrapper from './ContentWrapper';
import ContentCard from './ContentCard';
import SignInHeadline from './SignInHeadline';
import SchoolPicker from './SchoolPicker';
import PlatformPicker from './PlatformPicker';
import Footer from './Footer';
import getPreselectedSchool from './getPreselectedSchool';

const InstanceFinder = () => {
  const preselectedSchool = getPreselectedSchool();
  const [selectedSchool, setSelectedSchool] = useState(preselectedSchool);
  const [schoolPickerActive, setSchoolPickerActive] = useState(
    !preselectedSchool
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

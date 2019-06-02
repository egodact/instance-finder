import React, { useState } from 'react';
import ContentWrapper from './ContentWrapper';
import ContentCard from './ContentCard';
import SignInHeadline from './SignInHeadline';
import SchoolPicker from './SchoolPicker';

const InstanceFinder = () => {
  const [school, setSchool] = useState(null);

  return (
    <ContentWrapper>
      <SignInHeadline />
      <ContentCard>
        <SchoolPicker setSchool={setSchool} />
      </ContentCard>
    </ContentWrapper>
  );
};

export default InstanceFinder;

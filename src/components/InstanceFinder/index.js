import React from 'react';
import ContentWrapper from './ContentWrapper';
import ContentCard from './ContentCard';
import SignInHeadline from './SignInHeadline';

const InstanceFinder = () => (
  <ContentWrapper>
    <SignInHeadline />
    <ContentCard>
      <h1>Find an instance!</h1>
    </ContentCard>
  </ContentWrapper>
);

export default InstanceFinder;

import React from 'react';
import HeadlineContentWrapper from './HeadlineContentWrapper';
import LogoWrapper from './LogoWrapper';
import EgodactLogo from './EgodactLogo';
import SignInTitle from './SignInTitle';
import { FormattedMessage } from 'react-intl';

const SignInHeadline = () => (
  <HeadlineContentWrapper>
    <LogoWrapper>
      <EgodactLogo />
    </LogoWrapper>
    <SignInTitle>
      <FormattedMessage id="sign_in_headline.title" />
    </SignInTitle>
  </HeadlineContentWrapper>
);

export default SignInHeadline;

import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import messages_nl from './translations/nl.json';
import messages_en from './translations/en.json';
import getLanguage from './getLanguage';
import PageTitle from './components/PageTitle';
import InstanceFinder from './components/InstanceFinder';

const messages = {
  nl: messages_nl,
  en: messages_en
};

const language = getLanguage();

const App = () => (
  <IntlProvider locale={language} messages={messages[language]}>
    <Fragment>
      <PageTitle />
      <InstanceFinder />
    </Fragment>
  </IntlProvider>
);

export default App;

import React, { Fragment } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_nl from 'react-intl/locale-data/nl';
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

addLocaleData([...locale_en, ...locale_nl]);

const App = () => (
  <IntlProvider locale={language} messages={messages[language]}>
    <Fragment>
      <PageTitle />
      <InstanceFinder />
    </Fragment>
  </IntlProvider>
);

export default App;

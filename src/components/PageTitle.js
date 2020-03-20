import { useEffect } from 'react';
import { useIntl } from 'react-intl';

const PageTitle = () => {
  const intl = useIntl();

  useEffect(() => {
    document.title = intl.formatMessage({ id: 'page_title' });
  }, [intl]);

  return null;
};

export default PageTitle;

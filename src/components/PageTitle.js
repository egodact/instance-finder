import { useEffect } from 'react';
import { injectIntl, intlShape } from 'react-intl';

const PageTitle = ({ intl }) => {
  useEffect(() => {
    document.title = intl.formatMessage({ id: 'page_title' });
  }, [intl]);

  return null;
};

PageTitle.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(PageTitle);

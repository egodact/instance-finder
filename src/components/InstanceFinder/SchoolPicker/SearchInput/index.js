import React from 'react';
import StyledInput from './StyledInput';
import { injectIntl, intlShape } from 'react-intl';

const SearchInput = ({ intl, ...props }) => (
  <StyledInput
    placeholder={
      intl.formatMessage({ id: 'school_picker.search_input.placeholder' })
    }
    type="text"
    {...props}
  />
);

SearchInput.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(SearchInput);

import React from 'react';
import StyledInput from './StyledInput';
import { useIntl } from 'react-intl';

const SearchInput = props => {
  const intl = useIntl();
  return (
    <StyledInput
      placeholder={intl.formatMessage({
        id: 'school_picker.search_input.placeholder'
      })}
      type="text"
      {...props}
    />
  );
};

export default SearchInput;

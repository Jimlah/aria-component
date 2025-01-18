"use client";

import {
  SearchField as AriaSearchField,
  SearchFieldProps,
} from "react-aria-components";

const SearchField = ({ ...props }: SearchFieldProps) => {
  return <AriaSearchField {...props} />;
};

export default SearchField;

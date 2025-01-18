"use client";

import clsx from "clsx";
import {
  SearchField as AriaSearchField,
  SearchFieldProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

const SearchField = ({ className, ...props }: SearchFieldProps) => {
  return (
    <AriaSearchField
      className={twMerge(clsx("isolate relative", className))}
      {...props}
    />
  );
};

export default SearchField;

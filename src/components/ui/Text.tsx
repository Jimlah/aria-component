"use client";

import { Text as AriaText, TextProps } from "react-aria-components";

const Text = (props: TextProps) => {
  return (
    <AriaText
      className="text-gray-700 dark:text-gray-300"
      {...props}
    />
  );
};

export default Text;
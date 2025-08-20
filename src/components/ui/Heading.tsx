"use client";

import { Heading as AriaHeading, HeadingProps } from "react-aria-components";

const Heading = (props: HeadingProps) => {
  return (
    <AriaHeading
      className="font-semibold text-gray-900 dark:text-white"
      {...props}
    />
  );
};

export default Heading;
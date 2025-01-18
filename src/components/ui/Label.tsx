"use client";

import { Label as AriaLabel, LabelProps } from "react-aria-components";

const Label = (props: LabelProps) => {
  return (
    <AriaLabel
      className="text-sm absolute top-0 left-0 z-40 text-black dark:text-white  -translate-y-1/2 px-2 bg-transparent font-semibold"
      {...props}
    />
  );
};

export default Label;

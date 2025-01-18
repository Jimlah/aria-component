"use client";

import { Label as AriaLabel, LabelProps } from "react-aria-components";

const Label = (props: LabelProps) => {
  return (
    <AriaLabel
      className="text-sm group-data-[required=true]:after:content-['*'] group-data-[required=true]:after:ml-1 group-data-[required=true]:after:text-red-500 absolute top-0 left-0 z-40 mx-2 text-gray-700 dark:text-white bg-white dark:bg-gray-800 group-data-[disabled=true]:bg-transparent -translate-y-1/2 px-1 bg-transparent font-semibold"
      {...props}
    />
  );
};

export default Label;

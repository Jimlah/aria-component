"use client";

import clsx from "clsx";
import { TimeField as AriaTimeField, TimeFieldProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { TimeValue } from "react-aria";

const TimeField = ({ className, ...props }: TimeFieldProps<TimeValue>) => {
  return (
    <AriaTimeField
      className={twMerge(
        clsx(
          "group flex flex-col gap-1",
          "data-[disabled=true]:opacity-50",
          className
        )
      )}
      {...props}
    />
  );
};

export default TimeField;
"use client";

import clsx from "clsx";
import { DateSegment as AriaDateSegment, DateSegmentProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const DateSegment = ({ className, ...props }: DateSegmentProps) => {
  return (
    <AriaDateSegment
      className={twMerge(
        clsx(
          "outline-none px-1 py-0.5 rounded text-sm tabular-nums",
          "focus:bg-blue-100 dark:focus:bg-blue-900 focus:text-blue-900 dark:focus:text-blue-100",
          "data-[placeholder=true]:text-gray-400 dark:data-[placeholder=true]:text-gray-500",
          "data-[type=literal]:text-gray-600 dark:data-[type=literal]:text-gray-400",
          className
        )
      )}
      {...props}
    />
  );
};

export default DateSegment;
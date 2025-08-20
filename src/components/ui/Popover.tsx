"use client";

import clsx from "clsx";
import { Popover as AriaPopover, PopoverProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Popover = ({ className, ...props }: PopoverProps) => {
  return (
    <AriaPopover
      className={twMerge(
        clsx(
          "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg",
          "outline-none z-50",
          "data-[entering]:animate-in data-[entering]:fade-in data-[entering]:zoom-in-95",
          "data-[exiting]:animate-out data-[exiting]:fade-out data-[exiting]:zoom-out-95",
          className
        )
      )}
      {...props}
    />
  );
};

export default Popover;
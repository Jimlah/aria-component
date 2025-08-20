"use client";

import clsx from "clsx";
import { Tooltip as AriaTooltip, TooltipProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Tooltip = ({ className, ...props }: TooltipProps) => {
  return (
    <AriaTooltip
      className={twMerge(
        clsx(
          "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900",
          "px-2 py-1 rounded text-sm shadow-lg",
          "outline-none",
          "data-[entering]:animate-in data-[entering]:fade-in data-[entering]:zoom-in-95",
          "data-[exiting]:animate-out data-[exiting]:fade-out data-[exiting]:zoom-out-95",
          className
        )
      )}
      {...props}
    />
  );
};

export default Tooltip;
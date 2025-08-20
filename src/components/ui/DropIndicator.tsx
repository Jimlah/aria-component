"use client";

import clsx from "clsx";
import { DropIndicator as AriaDropIndicator, DropIndicatorProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const DropIndicator = ({ className, ...props }: DropIndicatorProps) => {
  return (
    <AriaDropIndicator
      className={twMerge(
        clsx(
          "outline-none",
          "data-[drop-target=before]:border-t-2 data-[drop-target=before]:border-blue-600",
          "data-[drop-target=after]:border-b-2 data-[drop-target=after]:border-blue-600",
          "data-[drop-target=on]:bg-blue-100 dark:data-[drop-target=on]:bg-blue-900/20",
          className
        )
      )}
      {...props}
    />
  );
};

export default DropIndicator;
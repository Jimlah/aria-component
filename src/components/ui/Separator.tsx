"use client";

import clsx from "clsx";
import { Separator as AriaSeparator, SeparatorProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Separator = ({ className, ...props }: SeparatorProps) => {
  return (
    <AriaSeparator
      className={twMerge(
        clsx(
          "bg-gray-300 dark:bg-gray-600",
          "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
          "data-[orientation=vertical]:w-px data-[orientation=vertical]:h-full",
          className
        )
      )}
      {...props}
    />
  );
};

export default Separator;
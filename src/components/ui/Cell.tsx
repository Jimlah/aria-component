"use client";

import clsx from "clsx";
import { Cell as AriaCell, CellProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Cell = ({ className, ...props }: CellProps) => {
  return (
    <AriaCell
      className={twMerge(
        clsx(
          "px-4 py-2 border-t border-gray-200 dark:border-gray-600",
          "text-gray-900 dark:text-white",
          className
        )
      )}
      {...props}
    />
  );
};

export default Cell;
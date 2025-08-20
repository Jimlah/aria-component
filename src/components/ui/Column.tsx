"use client";

import clsx from "clsx";
import { Column as AriaColumn, ColumnProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Column = ({ className, ...props }: ColumnProps) => {
  return (
    <AriaColumn
      className={twMerge(
        clsx(
          "px-4 py-2 text-left font-semibold text-gray-900 dark:text-white",
          "cursor-pointer outline-none",
          "hover:bg-gray-100 dark:hover:bg-gray-600",
          "focus-visible:ring-2 focus-visible:ring-blue-500",
          "data-[sort-direction]:bg-gray-100 dark:data-[sort-direction]:bg-gray-600",
          className
        )
      )}
      {...props}
    />
  );
};

export default Column;
"use client";

import clsx from "clsx";
import { Table as AriaTable, TableProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Table = ({ className, ...props }: TableProps) => {
  return (
    <AriaTable
      className={twMerge(
        clsx(
          "border-separate border-spacing-0 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden",
          className
        )
      )}
      {...props}
    />
  );
};

export default Table;
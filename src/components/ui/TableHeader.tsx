"use client";

import clsx from "clsx";
import { TableHeader as AriaTableHeader, TableHeaderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const TableHeader = ({ className, ...props }: TableHeaderProps<object>) => {
  return (
    <AriaTableHeader
      className={twMerge(
        clsx(
          "bg-gray-50 dark:bg-gray-700",
          className
        )
      )}
      {...props}
    />
  );
};

export default TableHeader;
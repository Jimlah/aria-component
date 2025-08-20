"use client";

import clsx from "clsx";
import { TableBody as AriaTableBody, TableBodyProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const TableBody = ({ className, ...props }: TableBodyProps<object>) => {
  return (
    <AriaTableBody
      className={twMerge(
        clsx(
          "bg-white dark:bg-gray-800",
          className
        )
      )}
      {...props}
    />
  );
};

export default TableBody;
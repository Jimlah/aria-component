"use client";

import clsx from "clsx";
import { Row as AriaRow, RowProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Row = ({ className, ...props }: RowProps<object>) => {
  return (
    <AriaRow
      className={twMerge(
        clsx(
          "outline-none cursor-pointer",
          "hover:bg-gray-50 dark:hover:bg-gray-700",
          "data-[selected=true]:bg-blue-100 dark:data-[selected=true]:bg-blue-900",
          "data-[focused=true]:ring-2 data-[focused=true]:ring-blue-500",
          className
        )
      )}
      {...props}
    />
  );
};

export default Row;
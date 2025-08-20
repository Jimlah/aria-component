"use client";

import clsx from "clsx";
import { GridList as AriaGridList, GridListProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const GridList = ({ className, ...props }: GridListProps<object>) => {
  return (
    <AriaGridList
      className={twMerge(
        clsx(
          "outline-none flex flex-col gap-1 p-1",
          "border border-gray-300 dark:border-gray-600 rounded-md",
          "max-h-[300px] overflow-auto",
          className
        )
      )}
      {...props}
    />
  );
};

export default GridList;